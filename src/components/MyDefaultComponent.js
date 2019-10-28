import React from 'react'
import {Link} from "react-router-dom";

//Default component on the page (it is important because we dont want new components to be added below)
function MyDefaultComponent() {
    return (
        <>
            <div className="align-items-stretch m-0">
                <h1 className="display-3 a text-center pt-5 pb-5 text-black font-weight-bold">Rywalizacja, rozwój i możliwość  zarobku w jednym!</h1>
                <div className="d-none d-xl-flex align-items-stretch pt-5 mt-5">
                    <div className="col-1"></div>
                    <Link to="/YourTokens" className="col-5 d-flex linkGlowny1 justify-content-around  btn  align-items-center aClass mr-3">
                        <h1 className=" display-1 a text-center   font-weight-bold ">Portfel</h1>
                    </Link>
                    <Link to="/Problems" className="col-5 d-flex linkGlowny2 btn  justify-content-around align-items-around aClass">
                        <h1 className="display-1 a text-center  font-weight-bold ">Problemy do rozwiązania</h1>
                    </Link>

                </div>
                <div className=" d-xl-none align-items-stretch pt-5 mt-5">
                    <div className="col-1"></div>
                    <Link to="/YourTokens" className="col-12 mb-3 m-2d-flex linkGlowny1 justify-content-around  btn align-items-center aClass mr-3">
                        <h1 className=" display-4 a text-center   font-weight-bold ">Portfel</h1>
                    </Link>
                    <Link to="/Problems" className="col-12 d-flex linkGlowny2 btn  justify-content-around align-items-around aClass">
                        <h1 className="display-4 a text-center   font-weight-bold ">Problemy do rozwiązania</h1>
                    </Link>

                </div>

            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src="https://cdn.dribbble.com/users/77121/screenshots/1257248/dribble-clock.gif "  alt="nie"></img>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4 font-weight-bold">Znajdź odpowiedź w  jak najkrótszym czasie...</h2>
                            <h4 className="font-weight-bold">Ustal dogodną stawkę za zagadkę logiczną, aby przyśpieszyć proces!</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src="https://i.gifer.com/2MgJ.gif"  alt="nie"></img>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4 font-weight-bold">Rozwiązuj zagadki logiczne i zyskuj!</h2>
                            <h4 className="font-weight-bold">Znajdź rozwiązanie i odbierz nagrodę!</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container  mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src="https://factordaily.com/wp-content/uploads/2018/09/SpringRole-Lead.gif"  alt="nie"></img>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4 font-weight-bold">Niezawodny system</h2>
                            <h4 className="font-weight-bold ">Stuprocentowa gwarancja bezpieczeństwa dzięki technologii blockchain i systemowi walidacji</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyDefaultComponent