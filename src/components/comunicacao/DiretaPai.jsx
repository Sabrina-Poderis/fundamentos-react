/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Sabrina" idade={22} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Maria" idade={80} nerd={false}></DiretaFilho>
        </div>
    )
}