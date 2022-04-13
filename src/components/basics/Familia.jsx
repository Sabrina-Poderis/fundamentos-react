/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
    return (
        <div>
            <FamiliaMembro nome="Ana"   sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Maria" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Joana" sobrenome="Ferreira"></FamiliaMembro>
        </div>
    )
}