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
                <p className="lead font-weight-bolder text-center">Look for and add solutions to problems. <span className="text-danger">Remember that you will get paid if your solution will be well.</span></p>
                <hr className="my-4"/>
                <div className="row display-4 rowMain rounded">
                            <div className="col-4 text-center">Tytuł</div>
                            <div className="col-4 text-center">Nagroda</div>
                            <div className="col-4 text-center">Pozostały czas</div>
                </div>
                  <h1 className="display-2 text-center font-weight-bold m-5">Do wykonania </h1>
                    {this.props.problemsUnFinished.map((item, i) => {

                        return(
                                <div className="dropdownItem">
                                        <Accordion key={i} className="dropdownItem">
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="col-12 dropdownItem">
                                                        <div className="row dropdownItem">
                                                            <div className="col-4 text-center">{item.title.toString()}</div>
                                                            <div className="col-4 text-center">{(item.ammount/1000000000000000000).toString()} HPS</div>
                                                            <div className="col-4 text-center">{item.time.toString()}</div>
                                                        </div>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div className="jumbotron problem">
                                                        <h1 className="display-4 font-weight-bold">Tytuł: {item.title.toString()}</h1>
                                                        <p className="lead font-weight-bold row ml-2 mr-2"><div>Kategoria pytania: {item.category.toString()}.</div> <span className="ml-auto">Nagroda za odpowiedź: {(item.ammount/1000000000000000000).toString()}</span></p>
                                                        <hr className="my-4"/>
                                                        <div className="tresc p-3">
                                                        <h1 className="display-4"> Treść pytania: </h1>
                                                        <p className="font-weight-bold text-danger ml-2">{item.problem.toString()}.</p>
                                                        </div>
                                                        <hr className="my-4"/>
                                                        <div className="problem d-flex justify-content-center">
                                                        <form className="col-12" onSubmit={(e) => {
                                                            e.preventDefault();
                                                            this.props.sendSolution(item.id.toString(), this.text.value)
                                                        }}>
                                                            <textarea className="form-control textarea" ref={(input) => this.text = input} placeholder="Tutaj napisz odpowiedź!"
                                                                      id="exampleFormControlTextarea1"
                                                                      rows="6"></textarea>
                                                            <button type="submit" className="btn btn-primary btn-lg col-12">Wyślij odpowiedź
                                                            </button>
                                                        </form>
                                                        </div>
                                                            <ul className="list-group problem p-4 mt-4">
                                                                <h1>Odpowiedzi</h1>
                                                        {this.props.solutions.map((solution, i) => {
                                                            console.log(solution.solution)
                                                            console.log(item.id.toString())
                                                            if(solution.id.toString() === item.id.toString()) {
                                                                return (
                                                                    <li  className="ml-5 list-group-item" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        this.props.confirmSolution(item.id.toString(), solution.id.toString())
                                                                    }}>

                                                                   <h1 className="display-4"> {solution.solution}</h1>
                                                                        <hr className="my-4"/>
                                                                    </li>
                                                                );
                                                            }
                                                        })}
                                                            </ul>

                                                    </div>

                                                </Accordion.Collapse>

                                            </Card>
                                        </Accordion>
                                </div>

                        );
                    })}
                <h1 className="display-2 text-center font-weight-bold m-5">Zakończone</h1>
                {this.props.problemsFinished.map((item, i) => {
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
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                this.props.sendSolution(item.id.toString(), this.text.value)
                                            }}>


                                            </form>
                                            {this.props.solutions.map((solution) => {
                                                console.log(solution.solution)
                                                console.log(item.id.toString())
                                                if(solution.id.toString() === item.id.toString()) {
                                                    return (
                                                        <div onClick={(e) => {
                                                            e.preventDefault();
                                                            this.props.confirmSolution(item.id.toString(), solution.id.toString())
                                                        }}>
                                                            <h1>{solution.solution}</h1>
                                                        </div>
                                                    );
                                                }
                                            })}

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