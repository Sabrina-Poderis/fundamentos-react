import React from "react";

class Mega extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            qtdNumerosSorteados: 0,
            numerosSorteados : []
        }
    }

    setQtdNumerosSorteados = (novoQtdNumerosSorteados) => {
        let numerosSorteados = []

        for(let i=0; i < novoQtdNumerosSorteados; i++){
            numerosSorteados.push(parseInt(Math.random() * (100 - 1)))
        }

        this.setState({
            qtdNumerosSorteados: novoQtdNumerosSorteados,
            numerosSorteados: numerosSorteados
        })
    }

    render(){
        return (
            <div>
                <h2>Mega da virada</h2>
                <div>
                    <label>Números: </label>
                    <input 
                        type="number"
                        value={this.state.qtdNumerosSorteados}
                        onChange={ e => this.setQtdNumerosSorteados(+e.target.value)}></input>
                    <p>
                        {this.state.numerosSorteados.map((numeroSorteado) => {
                            return (
                                <span>{numeroSorteado} </span>
                            )
                        })}
                    </p>
                </div>
            </div>
        )
    }
}

export default Mega