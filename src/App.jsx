import React from "react"

// Componentes
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'

export default (props) => 
    <div id="app">
        <h1>Fundamentos do React</h1>
        <Fragmento></Fragmento>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Sabrina"
            nota={6.0}>
        </ComParametro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Maria"
            nota={7.2}>
        </ComParametro>
        <Primeiro></Primeiro>
    </div>