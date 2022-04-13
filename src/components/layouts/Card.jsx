import "./Card.css"
import React from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="Card" style={cardStyle}>
        <h1 className="Title">{props.titulo}</h1>
        <div className="Content">
            {props.children}
        </div>
    </div>
    )
}