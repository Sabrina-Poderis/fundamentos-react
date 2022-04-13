import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')

const tag = <strong>Olá mundo! :D</strong>
ReactDOM.render(
    <div>
        { tag }
    </div>, 
    root
)