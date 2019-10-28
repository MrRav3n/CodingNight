import React from 'react'
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import '../App.css'
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
                <h1 className="display-4 text-center font-weight-bolder">Dodaj ogłoszenie</h1>
                <p className="lead font-weight-bolder text-center">Napisz z czym masz problem <span className="text-danger">Pamiętaj że potrzebujesz na koncie dodatkowe 50% kwoty (dodatkowa funkcja bezpieczeństwa). </span></p>
                <hr className="my-4"/>
                <form className="form-inline row justify-content-center p-2 rounded input-group-lg" onSubmit={(e) => {
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
                    <input type="text" ref={(input) => this.ammount = input} className="form-control col-5 mr-2 mb-2" placeholder="Kwota" />
                    <input type="text" ref={(input) => this.time = input} className="form-control col-5 mb-2" placeholder="Czas" />

                    <input type="text" ref={(input) => this.title = input} className="form-control col-5 mr-2 mb-2" placeholder="Tytuł" />
                    <>
                        <InputGroup className=" col-5 mb-2 d-flex flex-column">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="success"
                                title="Kategoria"
                                id="input-group-dropdown-1"
                                size="lg" block
                                className="button"
                            >
                                <Dropdown.Item href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    await this.setState({category: "Programowanie"})
                                    console.log(this.state.category)
                                }}><h1>Programowanie</h1></Dropdown.Item>
                                <Dropdown.Item href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    await this.setState({category: "Matematyka"})
                                    console.log(this.state.category)
                                }}><h1>Matematyka</h1></Dropdown.Item>
                                <Dropdown.Item href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    await this.setState({category: "Fizyka"})
                                    console.log(this.state.category)
                                }}><h1>Fizyka</h1></Dropdown.Item>
                                <Dropdown.Item href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    await this.setState({category: "Chemia"})
                                    console.log(this.state.category)
                                }}><h1>Chemia</h1></Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        </>
                    <textarea ref={(input) => this.problem = input} className="form-control" className="col-10 rounded mr-2 textarea" rows="7" placeholder="Opis"></textarea>
                    <button type="submit" className="btn btn-primary ml-2 col-5 mt-5 btn-lg ">Wyślij</button>
                </form>
            </div>
        );
    }
}

export default  AddProblem