import React from "react"

// Componentes
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layouts/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => 
    <div id="app">
        <Card titulo="Desafio aleatório">
            <Aleatorio min={1} max={100}></Aleatorio>
        </Card>
        <Card titulo="Fragmento">
            <Fragmento></Fragmento>
        </Card>
        <Card titulo="Fragmento">
            <Fragmento></Fragmento>
        </Card>
        <Card titulo="Com parâmetro">
            <ComParametro 
                titulo="Situação do aluno"
                aluno="Sabrina"
                nota={6.0}>
            </ComParametro>
        </Card>
        <Card titulo="Primeiro componente">
            <Primeiro></Primeiro>
        </Card>
    </div>