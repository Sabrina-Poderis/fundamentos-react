/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    // nome idade nerd
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
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