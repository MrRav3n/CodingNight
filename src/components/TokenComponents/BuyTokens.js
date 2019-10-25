import React from 'react'
//Buing tokens for REAL ethereum
class BuyTokens extends React.Component {
    render() {
        return(
            <div className="jumbotron container">
                <h1 className="display-4 text-center font-weight-bolder">Buy tokens</h1>
                <p className="lead font-weight-bolder text-center">Now you are able to buy some tokens using your REAL ethereum.
                    <span className="text-danger">1 ETH = 1 Token </span></p>
                <hr className="my-4"/>
                <form className="form-inline row justify-content-center p-2 rounded" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.buyTokens(this.tokens.value*1000000000000000000);
                }}>
                    <input type="text" ref={(input) => this.tokens = input} className="form-control col-5" placeholder="Tokens amout" />
                    <button type="submit" className="btn btn-primary ml-3">Buy Tokens</button>
                </form>
            </div>
        );
    }
}

export default BuyTokens