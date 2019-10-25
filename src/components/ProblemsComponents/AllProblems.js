import React from 'react'
import '../App.css'
import { Accordion, Card, Button, InputGroup } from 'react-bootstrap';

//Transfering tokens from one account to another
class AllProblems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <span>
            <div className="jumbotron container">
                <h1 className="display-4 text-center font-weight-bolder">List of all unfinished problems.</h1>
                <p className="lead font-weight-bolder text-center">Now you are able to add new problem. <span className="text-danger">Remember that you will have to pay extra 50% from ammount. (additional security protection). </span></p>
                <hr className="my-4"/>
                <div className="row display-4 rowMain rounded">
                            <div className="col-4 text-center">Title</div>
                            <div className="col-4 text-center">Ammount</div>
                            <div className="col-4 text-center">Time</div>
                </div>
                    {this.props.problems.map((item, i) => {
                        return(
                                <div className="dropdownItem">
                                        <Accordion key={i} className="dropdownItem">
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="col-12 dropdownItem">
                                                        <div className="row border-danger dropdownItem">
                                                            <div className="col-4 text-center">{item.title.toString()}</div>
                                                            <div className="col-4 text-center">{(item.ammount/1000000000000000000).toString()}</div>
                                                            <div className="col-4 text-center">{item.time.toString()}</div>
                                                        </div>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div className="jumbotron">
                                                        <h1 className="display-4 font-weight-bold">{item.title.toString()}</h1>
                                                        <p className="lead font-weight-bold">Question category: {item.category.toString()}. Reward: {(item.ammount/1000000000000000000).toString()}</p>
                                                        <hr className="my-4"/>
                                                        <p className="font-weight-bold">{item.problem.toString()}.</p>
                                                        <form>
                                                            <textarea className="form-control"
                                                                      id="exampleFormControlTextarea1"
                                                                      rows="6"></textarea>
                                                            <button type="submit" className="btn btn-primary">Send solution
                                                            </button>
                                                        </form>
                                                    </div>

                                                </Accordion.Collapse>

                                            </Card>
                                        </Accordion>
                                </div>

                        );
                    })}
                    </div>
            </span>




        );
    }
}

export default AllProblems