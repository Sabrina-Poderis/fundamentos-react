/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import alunos from "../../data/alunos"

export default (props) => {
    const alunosList = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id} {aluno.nome} - {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {alunosList}
            </ul>
        </div>
    )
}