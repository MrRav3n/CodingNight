import React from 'react'
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
//Transfering tokens from one account to another
class AllProblems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="jumbotron container">
                <h1 className="display-4 text-center font-weight-bolder">List of all unfinished problems.</h1>
                <p className="lead font-weight-bolder text-center">Now you are able to add new problem. <span className="text-danger">Remember that you will have to pay extra 50% from ammount. (additional security protection). </span></p>
                <hr className="my-4"/>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Reward for solution</th>
                        <th scope="col">Deadline</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.problems.map((item, i) => {
                        return(
                            <tr key={i}>
                                <th>{item.id.toString()}</th>
                                <td>{item.title.toString()}</td>
                                <td>{item.ammount.toString()}</td>
                                <td>{item.time.toString()}</td>
                            </tr>
                        );
                    })}


                    </tbody>
                </table>
            </div>

        );
    }
}

export default AllProblems