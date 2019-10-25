import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GiveAlowance from "./TokenComponents/GiveAlowance";
import BuyTokens from "./TokenComponents/BuyTokens";
import TransferTokens from "./TokenComponents/TransferTokens";
import TransferFromTokens from "./TokenComponents/TransferFromTokens";
//Tokens part of the website
class YourTokens extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <div className="jumbotron container mb-0">
                    <h1 className="display-4 text-center ">Hi {this.props.account}!</h1><h1 className="display-5"> <br />Your ballance is {this.props.balance} STE </h1>
                    <p className="lead font-weight-bolder">There you can safely buy, send and do anything you want with your local tokens</p>
                    <hr className="my-4" />
                    <p className="lead font-weight-bolder">There is also  <span className="text-danger">{this.props.supply} </span> tokens left</p>
                </div>
                    <div className="container">
                        <div className="row">
                            <>
                            <Link to="/BuyTokens" className="col-12 col-md d-inline-block bg-success text-white rounded m-1 text-center">
                                <h1 >Buy Tokens</h1>
                            </Link>
                            <Link to="/TransferTokens" className="col-12 col-md d-inline-block bg-primary text-white rounded m-1 text-center">
                                <h1>Transfer Tokens</h1>
                            </Link>
                            <Link to="/TransferFromTokens" className="col-12 col-md d-inline-block bg-danger text-white rounded m-1 text-center">
                                <h1>Transfer From</h1>
                            </Link>
                            <Link to="/GiveAlowance" className="col-12 col-md d-inline-block bg-warning text-white rounded m-1 text-center" >
                                <h1 >Give Permit</h1>
                            </Link>
                            </>
                        </div>
                    </div>
                                    <Switch>
                                        <Route exact path="/BuyTokens">
                                            <BuyTokens buyTokens={this.props.buyTokens}/>
                                        </Route>
                                        <Route exact path="/TransferTokens">
                                            <TransferTokens transfer={this.props.transfer}/>
                                        </Route>
                                        <Route exact path="/TransferFromTokens">
                                            <TransferFromTokens transferFrom={this.props.transferFrom}/>
                                        </Route>
                                        <Route exact path="/GiveAlowance">
                                            <GiveAlowance approve={this.props.approve}/>
                                        </Route>
                                    </Switch>
            </div>
            </Router>
        );
    }
}


export default YourTokens
