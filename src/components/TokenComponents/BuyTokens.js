import React from 'react'
//Buing tokens for REAL ethereum
class BuyTokens extends React.Component {
    render() {
        return(
            <div className="jumbotron container">
                <h1 className="display-4 text-center font-weight-bolder">Kup tokeny</h1>
                <p className="lead font-weight-bolder text-center">Kup  tokeny by zadawać pytania!
                    <span className="text-danger">1 ETH = 1 Token </span></p>
                <hr className="my-4"/>
                <form className="form-inline input-group-lg row justify-content-center p-2 rounded" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.buyTokens(this.tokens.value*1000000000000000000);
                }}>
                    <input type="text" ref={(input) => this.tokens = input} className="form-control col-5" placeholder="Ilość" />
                    <button type="submit" className="btn btn-primary ml-3 btn-lg">Kup</button>
                </form>
            </div>
        );
    }
}

export default BuyTokens