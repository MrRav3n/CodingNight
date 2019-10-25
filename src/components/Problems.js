import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProblem from "./ProblemsComponents/AddProblem";
import MyDefaultProblem from "./MyDefaultProblem";
//Tokens part of the website

class Problems extends React.Component {
    render() {
        console.log(this.props.account)
        return (
            <Router>

                <Switch> <Route exact path="/AddProblem">
                    <AddProblem buyTokens={this.props.buyTokens}
                                addProblem={this.props.addProblem}/>
                </Route>
                    <Route path="/">
                    <MyDefaultProblem account={this.props.account}/>
                    </Route>
                </Switch>

            </Router>
        );
    }
}


export default Problems
