import './Contador.css'
import React from "react";
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

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

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render(){
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes onIncrement={this.incrementNumber} onDecrement={this.decrementNumber}></Botoes>
            </div>
        )
    }
}

export default Contador