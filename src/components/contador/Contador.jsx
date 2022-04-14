import './Contador.css'
import React from "react";

class Contador extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 5
        }
        this.incrementNumber = this.incrementNumber.bind(this)
        this.decrementNumber = this.decrementNumber.bind(this)
    }

    incrementNumber = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    decrementNumber = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value
        })
    }

    render(){
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <p>Valor inicial: {this.state.numero}</p>
                <div>
                    <label>Passo: </label>
                    <input 
                        id="passoInput"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}></input>
                </div>
                <button onClick={this.incrementNumber}>+</button>
                <button onClick={this.decrementNumber}>-</button>
            </div>
        )
    }
}

export default Contador