import "./App.css"
import React from "react"

// Componentes
import ListaAlunos from './components/repeticao/ListaAlunos'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Card from './components/layouts/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => 
    <div className="App">
        <div className="Cards">
            <Card titulo="Lista de alunos" color="#CC3F0C">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Família" color="#ADB9E3">
                <Familia sobrenome="Silva">
                <FamiliaMembro nome="Ana"></FamiliaMembro>
                <FamiliaMembro nome="Maria"></FamiliaMembro>
                <FamiliaMembro nome="Joana"></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="Desafio aleatório" color="#a9e5bb">
                <Aleatorio min={1} max={100}></Aleatorio>
            </Card>
            <Card titulo="Fragmento" color="#D33E43">
                <Fragmento></Fragmento>
            </Card>
            <Card titulo="Com parâmetro" color="#85FF9E">
                <ComParametro 
                    titulo="Situação do aluno"
                    aluno="Sabrina"
                    nota={6.0}>
                </ComParametro>
            </Card>
            <Card titulo="Primeiro componente" color="#F4978E">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>