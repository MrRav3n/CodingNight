import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProblem from "./ProblemsComponents/AddProblem";
import MyDefaultProblem from "./MyDefaultProblem";
import AllProblems from "./ProblemsComponents/AllProblems";
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
                    <Route exact path="/AllProblems">
                        <AllProblems buyTokens={this.props.buyTokens}
                                    addProblem={this.props.addProblem}
                                    problems={this.props.problems}/>
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
