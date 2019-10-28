import React from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";
import AddProblem from "./ProblemsComponents/AddProblem";
//Default component on the page (it is important because we dont want new components to be added below)
class MyDefaultProblem extends React.Component {
    render() {

    return (

            <div>
                <div className="jumbotron container mb-0">
                    <h1 className="display-4 text-center font-weight-bold">Cześć <span className="nazwa">{this.props.account}</span>!</h1><h1 className="display-5"> <br />Stan twojego konta wynosi <span className="text-danger">{this.props.balance}</span> HMP </h1>
                    <p className="lead font-weight-bolder wiekszy">W tym menu możesz wybrać aktywność jaką jesteś zainteresowany(a), więc:</p>
                    <hr className="my-4" />


                <div className="container">
                    <div className="row">
                        <>
                            <Link to="/AddProblem" className="col-12 col-md btn btn-lgg d-inline-block token m-1 text-center">
                                <h1>Wystaw ogłoszenie</h1>
                            </Link>
                            <Link to="/AllProblems" className="col-12 col-md btn btn-lgg d-inline-block token m-1 text-center">
                                <h1>Przeglądaj ogłoszenia</h1>
                            </Link>
                        </>
                    </div>
                </div>
            </div>
            </div>

    );
}

}

export default MyDefaultProblem