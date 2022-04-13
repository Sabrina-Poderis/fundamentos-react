import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

// Componentes
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
const root = document.getElementById('root')

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Sabrina"
            nota={6.0}>
        </ComParametro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Maria"
            nota={7.0}>
        </ComParametro>
    </div>, 
    root
)