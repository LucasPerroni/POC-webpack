import React from 'react'
import {render} from 'react-dom'

import './assets/reset.css'
import './assets/style.css'

import Bunny from './assets/bunny.jpg'

function App() {
    const num1 = 10
    const num2 = 60

    function soma(a, b) {
        return (a + b)
    }

    const somatorio = soma(num1, num2)

    return (
        <>
            <h1>Olá mundo!</h1>
            <p>A soma é {somatorio}</p>
            <img src={Bunny} alt='Coelho' />
        </>
    )
}

render(<App />, document.querySelector('.root'))