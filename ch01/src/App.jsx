import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    // const [name, setName] = [ n, (n) => {} ];   // 구조 분해 ( 비구조 할당 )

    // const numberState = useState(10);        // 구조분해 적용 전
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const [number, setNumber] = useState(10);   // 구조분해 적용 한 내용

    const handleOnClick = () => {
        // numberState[1](numberState[0] + 10);
        setNumber(number + 10);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleOnClick}>+</button>
        </div>
    )
}

export default App
