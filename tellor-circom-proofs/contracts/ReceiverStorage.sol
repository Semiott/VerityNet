// ReceiverStorage.sol

pragma solidity 0.5.16;

// IStateReceiver represents interface to receive state
interface IStateReceiver {
  function onStateReceive(uint256 stateId, bytes calldata data) external;
}

contract ReceiverStorage {
  mapping(uint256 => mapping(uint256 => uint256)) public values;
  mapping(uint256 => mapping(uint256 => bool)) public set;
  mapping(uint256 => uint256[]) public timestamps;

  address constant STATE_SYNCER_ROLE = 0x0000000000000000000000000000000000001001;

  constructor() public {}

  function onStateReceive(uint256 stateId, bytes calldata data) external {
    require(msg.sender == STATE_SYNCER_ROLE);
    (uint256 requestId, uint256 timestamp, uint256 value) = parse96BytesToThreeUint256(data);

    values[requestId][timestamp] = value;   // Save to values datastore
    timestamps[requestId].push(timestamp);
    set[requestId][timestamp] = true;
  }

  function retrieveData(uint256 _requestId, uint256 _timestamp) public view returns(bool, uint256) {
    return(set[_requestId][_timestamp], values[_requestId][_timestamp]);
  }

  function parse96BytesToThreeUint256(bytes memory data) public pure returns(uint256, uint256, uint256) {
    uint256 parsed1;
    uint256 parsed2;
    uint256 parsed3;
    assembly {
	    parsed1 := mload(add(data, 32))
	    parsed2 := mload(add(data, 64))
	    parsed3 := mload(add(data, 96))
    }
    return(parsed1, parsed2, parsed3);
  }
}
