import React from "react";
import "./Contador.css";

export default class Contador extends React.Component {

    constructor() {
        super();
        this.state = {
            contador: 0,
        }
    }

    decrementar() {
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    incrementar() {
        this.setState({
            contador: this.state.contador + 1,
        })
    }



    render() {
        return (
            <div className="titulo">
                <h1>Contador de Pessoas</h1>
                <h1>{this.state.contador}</h1>
                <div className="button">
                    <button onClick = {this.decrementar.bind(this)}>-</button>
                    <button onClick = {this.incrementar.bind(this)}>+</button>
                </div>
            </div>
        );
    }
}