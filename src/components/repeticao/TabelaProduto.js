/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import produtos from "../../data/produtos"

export default (props) => {
    const produtosList = produtos.map((produto) => {
        return (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
            </tr>
        )
    })

    return (
        <div>
            <table border="1px">
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                {produtosList}
            </table>
        </div>
    )
}