pragma solidity ^0.5.8;

contract Token {
    address payable public mainPerson;
    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) public allowed;
    uint  public _totalSupply; //total supply of the token
    uint public tokensLeft; //Tokens left
    string public name; //Name of the token
    string public symbol; //Symbol of the token
    uint8 public decimals; //Token decimals
    uint x;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    //Typical ERC-20 constructor
    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint __totalSupply) public {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        x = 10 ** uint(_decimals);
        _totalSupply =  __totalSupply * x;
        balances[msg.sender] = _totalSupply/10;
        tokensLeft= _totalSupply - balances[msg.sender];
        mainPerson=msg.sender;
    }
    //Function that allows us to buy tokens for ethereum
    function buyTokens() public payable {
        require(msg.value>0);
        require(tokensLeft>=(tokensLeft-=msg.value));
        balances[msg.sender]+=msg.value;
        tokensLeft-=msg.value;
        mainPerson.transfer(msg.value);
    }

    //Typical ERC-20 Token standard functions (BELOW)
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }
    function balanceOf(address tokenOwner) public view returns (uint) {
        return balances[tokenOwner];
    }
    function allowance(address tokenOwner, address spender) public view returns (uint) {
        return allowed[tokenOwner][spender];
    }
    function transfer(address to, uint tokens) public returns (bool) {
        require(tokens<=balances[msg.sender]);
        balances[to] += tokens;
        balances[msg.sender] -= tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
    function approve(address spender, uint tokens)  public returns (bool) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
    function transferFrom(address from, address to, uint tokens) public returns (bool) {
        require(balances[from] >= tokens);
        require(allowed[from][msg.sender] >= tokens);
        balances[from] -= tokens;
        allowed[from][msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(from, to, tokens);
        return true;
    }
}
