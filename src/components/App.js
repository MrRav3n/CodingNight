import React, { Component } from 'react';
import Navbar from "./Navbar"
import './App.css';
import Web3 from 'web3'
import YourTokens from './YourTokens'
import CodingNight from '../abis/CodingNight.json'
import MyDefaultComponent from "./MyDefaultComponent";
import Loading from "./Loading";
import Problems from "./Problems";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    async componentWillMount() {
        await this.loadWeb3();
        await this.loadContract();
        await this.loadAccount();
        await this.readData();
        window.ethereum.on('accountsChanged', async (accounts)  => {
          await this.loadAccount();
        })
    }

    //Provide web3 to app
    async loadWeb3() {
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    //Loading data from web3 and contract (everything that is needed for app to work well)
    async loadAccount() {
        let account = await window.web3.eth.getAccounts();
        account = account[0];
        let accountShort = account.substring(0,6);
        let balance = await this.state.contract.methods.balanceOf(account).call();
        let supply = await this.state.contract.methods.tokensLeft().call()
        balance = balance / 1000000000000000000;


        //checking and setting hours:minutes:secound to next color

        //Checking if deployer of the contract is currently connected

        supply = supply/1000000000000000000;
        supply = supply.toString();
        this.setState({
            account: account,
            accountShort: accountShort,
            balance: balance,
            loading: false,
            supply: supply,
        });


    }

        //Loading contract data
        async loadContract() {
            const networkId = await window.web3.eth.net.getId();
            const networkData = await  CodingNight.networks[networkId];
            if(networkData) {
                const contract = await window.web3.eth.Contract( CodingNight.abi, networkData.address);
                this.setState({contract});
            } else {
                alert('Connect to another network')
            }
        }

        //Functions section

        async buyTokens(amout) {
            await this.state.contract.methods.buyTokens().send({from: this.state.account, value: amout}, (error, result) => {
                if(result!=null){
                    this.checkBlockNumber();
                }
            });
        }
        async transfer(address,amout) {
            await this.state.contract.methods.transfer(address,amout).send({from: this.state.account}, (error, result) => {
                if(result!=null){
                    this.checkBlockNumber();
                }
            });
        }
        async transferFrom(addressFrom, addressTo, amout) {
            await this.state.contract.methods.transferFrom(addressFrom, addressTo, amout).send({from: this.state.account}, (error, result) => {
                if(result!=null){
                    this.checkBlockNumber();
                }
            });
        }
        async approve(address,ammout) {
            await this.state.contract.methods.approve(address,ammout).send({from: this.state.account}, (error, result) => {
                if(result!=null){
                    this.checkBlockNumber();
                }
            });
        }

    //Function that checks if transaction is done
    async checkBlockNumber() {
        this.setState({loading:true});
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        };
        const blockNumber = await window.web3.eth.getBlockNumber();
        let blockNumberNew = await window.web3.eth.getBlockNumber();
        while(blockNumber === blockNumberNew) {
            blockNumberNew = await window.web3.eth.getBlockNumber();
            await sleep(100);
        }
        await this.loadAccount();
        this.setState({loading:false});
    }
    async addProblem( _ammount, _ammountSave,  _time, _title, _problem,  _category) {
        await this.state.contract.methods.addProblem(_ammount, _ammountSave,  _time, _title, _problem,  _category).send({from: this.state.account}, (error, result) => {
            if(result!=null){
                this.checkBlockNumber();
            }} )
    }
    async readData() {
        let items = await this.state.contract.methods.problemsCount().call();
        items=items.toNumber();
        console.log(items)
        for(let i=0; i<items; i++) {
            let item = await this.state.contract.methods.problems(i).call();
            this.setState({problems : [...this.state.problems, item]})
        }
        console.log(this.state.problems);
    }


    constructor(props) {
        super(props);
        this.state = {
            account: null,
            loading: true,
            problems: [],
        }
    }

    render() {
      return (
          <Router>
              <div className="mainDiv">
                  <Navbar account={this.state.account} />
                  {this.state.loading
                      ? <Loading/>
                      : <Switch>
                          <Route exact path="/YourTokens">
                              <YourTokens balance={this.state.balance}
                                          account={this.state.accountShort}
                                          buyTokens={this.buyTokens.bind(this)}
                                          transfer={this.transfer.bind(this)}
                                          transferFrom={this.transferFrom.bind(this)}
                                          approve={this.approve.bind(this)}
                                          supply={this.state.supply}
                              />
                          </Route>
                          <Route exact path="/Problems" >
                            <Problems balance={this.state.balance}
                                      account={this.state.accountShort}
                                      addProblem={this.addProblem.bind(this)}
                                      problems={this.state.problems}
                            />
                          </Route>
                          <Route path="/" component={MyDefaultComponent} />
                      </Switch>}
                  </div>
          </Router>
      );
    }
  }

export default App;
