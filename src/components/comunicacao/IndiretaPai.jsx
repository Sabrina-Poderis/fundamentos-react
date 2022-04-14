/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    // nome idade nerd
    let nome = '?'
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        nome= nomeParam
        idade= idadeParam
        nerd= nerdParam
    }

    return (
        <div>
            <span>{nome}</span> 
            <span>{idade}</span> 
            <span>{nerd ? 'Verdadeiro' : 'False'}</span>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}