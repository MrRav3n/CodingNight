import React from 'react'
import {Link} from "react-router-dom";

//Default component on the page (it is important because we dont want new components to be added below)
function MyDefaultComponent() {
    return (
        <>
            <div className="align-items-stretch m-0">
                <h1 className="display-3 a text-center pt-5 pb-5 text-white">Website about collecting</h1>
                <div className="d-none d-md-flex align-items-stretch pt-5 mt-5">
                    <div className="col-1"></div>
                    <Link to="/YourTokens" className="col-5 d-flex justify-content-around align-items-around aClass">
                        <h1 className=" display-1 a text-center  font-weight-bold mt-5">Your Tokens</h1>
                    </Link>
                    <Link to="/Problems" className="col-5 d-flex justify-content-around align-items-around aClass">
                        <h1 className=" display-1 a text-center  font-weight-bold mt-5">Problems</h1>
                    </Link>

                </div>
                <div className=" d-md-none align-items-stretch pt-5 mt-5">
                    <Link to="/YourTokens" className=" col-12 d-flex justify-content-center align-items-center aClass mb-3">
                        <h1 className=" display-3 a text-center  font-weight-bold">Your Tokens</h1>
                    </Link>
                    <Link to="/Problems" className=" col-12 d-flex justify-content-center align-items-center aClass mb-3">
                        <h1 className=" display-3 a text-center  font-weight-bold">Problems</h1>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default MyDefaultComponent