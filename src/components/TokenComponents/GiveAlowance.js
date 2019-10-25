import React from 'react'
//Giving alowance to someone to use our wallet (local tokens wallet)
class GiveAlowance extends React.Component {
    render() {
        return(
            <div className="jumbotron container">
                <h1 className="display-4 text-center font-weight-bolder">Give permision to transfer your tokens</h1>
                <p className="lead font-weight-bolder text-center">Now you are able to give someone permision to transfer specified number of your tokens. <br/><span className="text-danger">Be careful!</span></p>
                <hr className="my-4"/>
                <form className="form-inline row justify-content-center p-2 rounded" onSubmit={(e) => {
                    e.preventDefault();
                    let value = this.tokens.value*1000000000000000000;
                    value = value.toString();
                    this.props.approve(this.address.value, value).then(r  => {
                        console.log('transation done');
                    });
                }}>
                    <input type="text" ref={(input) => this.address = input} className="form-control col-12 col-sm-5 mr-sm-3 mb-2 mb-sm-0" placeholder="Address" />
                    <input type="text" ref={(input) => this.tokens = input} className="form-control col-12 col-sm-3 mb-2 mb-sm-0" placeholder="Tokens amout" />
                    <button type="submit" className="btn btn-primary ml-3 ">Give permit</button>
                </form>
            </div>
        );
    }
}

export default GiveAlowance