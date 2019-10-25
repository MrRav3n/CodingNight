import React from 'react'
//Transfering tokens from our account
class TransferTokens extends React.Component {
    render() {
        return(
            <div className="jumbotron container">
                <h1 className="display-4 text-center font-weight-bolder">Transfer tokens from your account</h1>
                <p className="lead font-weight-bolder text-center">Now you are able to transfer some tokens to someone else. </p>
                <hr className="my-4"/>
                <form className="form-inline row justify-content-center p-2 rounded" onSubmit={(e) => {
                    e.preventDefault();
                    let value = this.tokens.value*1000000000000000000;
                    value = value.toString();
                    this.props.transfer(this.address.value, value);
                }}>
                    <input type="text" ref={(input) => this.address = input} className="form-control col-12 col-sm-5 mr-sm-3 mb-2 mb-sm-0" placeholder="Address to" />
                    <input type="text" ref={(input) => this.tokens = input} className="form-control col-12 col-sm-3 mb-2 mb-sm-0" placeholder="Tokens amout" />
                    <button type="submit" className="btn btn-primary ml-3 ">Send tokens</button>
                </form>
            </div>
        );
    }
}

export default TransferTokens