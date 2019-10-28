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
import './App.css'
//Tokens part of the website
class YourTokens extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <div className="jumbotron container mb-0">
                    <h1 className="display-4 text-center font-weight-bold">Cześć <span className="nazwa">{this.props.account}</span>!</h1><h1 className="display-5"> <br />Balans konta: {this.props.balance} HMP </h1>
                    <p className="lead font-weight-bolder wiekszy">Tutaj możesz bezpiecznie kupić, kryptowalutę. Bez żadnych obaw, najprościej!</p>
                    <hr className="my-4" />
                    <p className="lead font-weight-bolder wiekszy">Pozostało  <span className="text-danger">{this.props.supply} </span> dostępnych tokenów do kupienia</p>

                    <div className="container">
                        <div className="row">
                            <>
                            <Link to="/BuyTokens" className="col-12 col-md d-inline-block  token m-1 text-center">
                                <h1 >Kup</h1>
                            </Link>
                            <Link to="/TransferTokens" className="col-12 col-md d-inline-block  token   m-1 text-center">
                                <h1>Wyślij</h1>
                            </Link>
                            <Link to="/TransferFromTokens" className="col-12 col-md d-inline-block  token  m-1 text-center">
                                <h1>Wyślij z</h1>
                            </Link>
                            <Link to="/GiveAlowance" className="col-12 col-md d-inline-block  token  m-1 text-center" >
                                <h1 >Dziel się portfelem</h1>
                            </Link>
                            </>
                        </div>
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
