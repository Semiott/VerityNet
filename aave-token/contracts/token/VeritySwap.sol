pragma solidity ^0.6.0;

import {ERC20} from "../open-zeppelin/ERC20.sol";
import * as AaveToken from "./AaveToken.sol";
import * as TinlakeERC20 from "./TinklakeERC20.sol";


contract VeritySwap {

  struct Swap {
    uint256 openValue;
    address openTrader;
    address openContractAddress;
    uint256 closeValue;
    address closeTrader;
    address closeContractAddress;
  }

  enum States {
    INVALID,
    OPEN,
    CLOSED,
    EXPIRED
  }

  mapping (bytes32 => Swap) private swaps;
  mapping (bytes32 => States) private swapStates;

  event Open(bytes32 _swapID, address _closeTrader);
  event Expire(bytes32 _swapID);
  event Close(bytes32 _swapID);

  modifier onlyInvalidSwaps(bytes32 _swapID) {
    require (swapStates[_swapID] == States.INVALID);
    _;
  }

  modifier onlyOpenSwaps(bytes32 _swapID) {
    require (swapStates[_swapID] == States.OPEN);
    _;
  }

  function open(bytes32 _swapID, uint256 _openValue, address _openContractAddress, uint256 _closeValue, address _closeTrader, address _closeContractAddress) public onlyInvalidSwaps(_swapID) {
    // Transfer value from the opening trader to this contract.
    ERC20 AaveToken = ERC20(_openContractAddress);
    require(_openValue <= AaveToken.allowance(msg.sender, address(this)));
    require(AaveToken.transferFrom(msg.sender, address(this), _openValue));

    // Store the details of the swap.
    Swap memory swap = Swap({
      openValue: _openValue,
      openTrader: msg.sender,
      openContractAddress: _openContractAddress,
      closeValue: _closeValue,
      closeTrader: _closeTrader,
      closeContractAddress: _closeContractAddress
    });
    swaps[_swapID] = swap;
    swapStates[_swapID] = States.OPEN;

    Open(_swapID, _closeTrader);
  }

  function close(bytes32 _swapID) public onlyOpenSwaps(_swapID) {
    // Close the swap.
    Swap memory swap = swaps[_swapID];
    swapStates[_swapID] = States.CLOSED;

    // Transfer the closing funds from the closing trader to the opening trader.
    ERC20 TinklakeERC20 = ERC20(swap.closeContractAddress);
    require(swap.closeValue <= TinklakeERC20.allowance(swap.closeTrader, address(this)));
    require(TinklakeERC20.transferFrom(swap.closeTrader, swap.openTrader, swap.closeValue));

    // Transfer the opening funds from this contract to the closing trader.
    ERC20 AaveToken = ERC20(swap.openContractAddress);
    require(AaveToken.transfer(swap.closeTrader, swap.openValue));

    Close(_swapID);
  }

  function expire(bytes32 _swapID) public onlyOpenSwaps(_swapID) {
    // Expire the swap.
    Swap memory swap = swaps[_swapID];
    swapStates[_swapID] = States.EXPIRED;

    // Transfer opening value from this contract back to the opening trader.
    ERC20 AaveToken = ERC20(swap.openContractAddress);
    require(AaveToken.transfer(swap.openTrader, swap.openValue));

    Expire(_swapID);
  }

  function check(bytes32 _swapID) public view returns (uint256 openValue, address openContractAddress, uint256 closeValue, address closeTrader, address closeContractAddress) {
    Swap memory swap = swaps[_swapID];
    return (swap.openValue, swap.openContractAddress, swap.closeValue, swap.closeTrader, swap.closeContractAddress);
  }
}
