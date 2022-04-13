import React from "react";

export default function Aleatorio(props){
    const min = props.min;
    const max = props.max;

    Math.minmax = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

    return (
        <React.Fragment>
            <h2>Número aleatório: { Math.minmax(min, max) }</h2>
        </React.Fragment>
    )
}