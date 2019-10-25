import React from 'react'
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
//Transfering tokens from one account to another
class AddProblem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: "Programming",
        }
    }
    render() {
        console.log(this.props.addProblem)
        return(
            <div className="jumbotron container">
                <h1 className="display-4 text-center font-weight-bolder">Add new problem.</h1>
                <p className="lead font-weight-bolder text-center">Now you are able to add new problem. <span className="text-danger">Remember that you will have to pay extra 50% from ammount. (additional security protection). </span></p>
                <hr className="my-4"/>
                <form className="form-inline row justify-content-center p-2 rounded" onSubmit={(e) => {
                    e.preventDefault();
                    let _ammount=this.ammount.value*1000000000000000000;
                    _ammount=_ammount.toString();
                    let _ammountSave=Math.ceil(_ammount*0.5).toString();
                    console.log(_ammountSave)
                    let _time=this.time.value;
                    let _title=this.title.value;
                    let _problem=this.problem.value;
                    let _category=this.state.category;
                    this.props.addProblem(_ammount, _ammountSave,  _time, _title, _problem,  _category)

                }}>
                    <input type="text" ref={(input) => this.ammount = input} className="form-control col-5 mr-2 mb-2" placeholder="Ammount" />
                    <input type="text" ref={(input) => this.time = input} className="form-control col-5 mb-2" placeholder="Time to complete" />
                    <input type="text" ref={(input) => this.title = input} className="form-control col-5 mr-2 mb-2" placeholder="Title" />
                    <>
                        <InputGroup className=" col-5 mb-1">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Choose category"
                                id="input-group-dropdown-1"
                                className="col-5"
                            >
                                <Dropdown.Item href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    await this.setState({category: "Programming"})
                                    console.log(this.state.category)
                                }}>Programowanie</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    await this.setState({category: "Maths"})
                                    console.log(this.state.category)
                                }}>Matematyka</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    await this.setState({category: "Physics"})
                                    console.log(this.state.category)
                                }}>Fizyka</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    await this.setState({category: "Chemistry"})
                                    console.log(this.state.category)
                                }}>Chemia</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        </>
                    <textarea ref={(input) => this.problem = input} className="form-control" className="col-10 rounded" rows="7" placeholder="Add content of the problem"></textarea>
                    <button type="submit" className="btn btn-primary ml-2 col-5 mt-5">Send new problem</button>
                </form>
            </div>
        );
    }
}

export default  AddProblem