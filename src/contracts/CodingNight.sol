pragma solidity ^0.5.8;

import "./Token.sol";

contract CodingNight is Token{
    mapping(address => bool) validators;
    uint public problemsCount;
    struct Problem {
        uint id;
        uint ammount;
        bool isCompleted;
        uint time;
        string problem;
        string title;
        string category;
        address owner;
        uint ammountSave;
    }
    struct ProblemsSolution {
        uint id;
        address sender;
        string solution;
    }
    mapping(uint => Problem) public problems;
    uint public solutionsCount;
    mapping(uint => ProblemsSolution) public solutions;
    function transferProblem(address to, uint tokens) public returns (bool) {
        balances[to] += tokens;
        balances[mainPerson] -= tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
    function addProblem(uint _ammount, uint _ammountSave, uint _time, string memory _title, string memory _problem, string memory _category) public {
        require(balances[msg.sender]>=_ammount+_ammountSave);
        require(_ammount>0);
        require(_ammountSave*2>=_ammount);
        require(_time>0);
        problems[problemsCount].id=problemsCount;
        problems[problemsCount].title=_title;
        problems[problemsCount].ammount=_ammount;
        problems[problemsCount].ammountSave=_ammountSave;
        problems[problemsCount].time=_time+block.timestamp;
        problems[problemsCount].problem=_problem;
        problems[problemsCount].category=_category;
        problems[problemsCount].isCompleted= false;
        problems[problemsCount].owner= msg.sender;
        problemsCount++;
        transfer(mainPerson,_ammount+_ammountSave);
    }
    function sendSolution(uint _id, string memory _solution) public {
        require(_id>=0 && _id<problemsCount);
        solutions[solutionsCount].id = _id;
        solutions[solutionsCount].sender = msg.sender;
        solutions[solutionsCount].solution = _solution;
        solutionsCount++;
    }
    function confirmSolution(uint _idProblem, uint _idSolution) public {
        require(block.timestamp< problems[_idProblem].time);
        require( problems[_idProblem].owner == msg.sender);
        require( problems[_idProblem].isCompleted == false);
        problems[_idProblem].isCompleted = true;
        transferProblem(solutions[_idSolution].sender, problems[_idProblem].ammount);
        transferProblem(problems[_idProblem].owner, problems[_idProblem].ammountSave);
    }
    function addValidator(address _address) public {
    require(main == msg.sender);
        validators[_address] = true;
    }
    function blockAccount(address _account) public {
        require(validators[msg.sender]==true);
        balances[_account] = 0;
    }
    function giveBack(address _account, uint _tokens) public {
        require(main == msg.sender);
        balances[_account] += _tokens;
    }

    constructor() Token("HelpMePlz", "HMP", 18, 1000000) public {

    }
}
