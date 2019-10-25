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

        return (
            <Router>

                <Switch> <Route exact path="/AddProblem">
                    <AddProblem         addProblem={this.props.addProblem}/>
                </Route>
                    <Route exact path="/AllProblems">
                        <AllProblems    addProblem={this.props.addProblem}
                                        sendSolution={this.props.sendSolution}
                                        problemsFinished={this.props.problemsFinished}
                                        problemsUnFinished={this.props.problemsUnFinished}
                                        solutions={this.props.solutions}
                        />
                    </Route>
                    <Route path="/">
                    <MyDefaultProblem   account={this.props.account}/>
                    </Route>
                </Switch>

            </Router>
        );
    }
}


export default Problems
