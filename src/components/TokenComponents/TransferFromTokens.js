import React from 'react'
//Transfering tokens from one account to another
class TransferFromTokens extends React.Component {
    render() {
        return(
            <div className="jumbotron container">
                <h1 className="display-4 text-center font-weight-bolder">Otrzymaj tokeny</h1>
                <p className="lead font-weight-bolder text-center">Dzięki tej opcji możesz wysyłać tokeny z portfeli innych osób.<span className="text-danger"> Musisz mieć odpowiednie pozwolenie </span></p>
                <hr className="my-4"/>
                <form className="form-inline input-group-lg row justify-content-center p-2 rounded" onSubmit={(e) => {
                    e.preventDefault();
                    let value = this.tokens.value*1000000000000000000;
                    value = value.toString();
                    this.props.transferFrom(this.addressFrom.value,this.addressTo.value,value).then((e) => {
                        console.log(123);
                    });
                }}>
                    <input type="text" ref={(input) => this.addressFrom = input} className="form-control col-5 mr-2 mb-2" placeholder="Z:" />
                    <input type="text" ref={(input) => this.addressTo = input} className="form-control col-5 mb-2" placeholder="Do:" />
                    <input type="text" ref={(input) => this.tokens = input} className="form-control col-5" placeholder="Ilość" />
                    <button type="submit" className="btn btn-primary btn-lg ml-2 col-5">Wyślij</button>
                </form>
            </div>
        );
    }
}

export default  TransferFromTokens