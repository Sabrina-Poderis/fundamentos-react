import React from "react"

export default function ComParametro(props){
    // Propriedades são apenas leitura, não dá pra alterar!
    const notaAluno = Math.ceil(props.nota)
    const status = props.nota >= 7 ? 'Aprovada' : 'Reprovada'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno }</strong> tem nota {notaAluno } e foi <strong>{ status }</strong>
            </p>
        </div>
    )
}