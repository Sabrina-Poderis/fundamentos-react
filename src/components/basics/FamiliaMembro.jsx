/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    return (
        <div>
            <strong>{props.nome}</strong> {props.sobrenome}
        </div>
    )
}