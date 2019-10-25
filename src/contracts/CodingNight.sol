pragma solidity ^0.5.8;

import "./Token.sol";

contract CodingNight is Token{

    constructor() Token("DeepOrange", "DPO", 18, 1000) public {

    }
}
