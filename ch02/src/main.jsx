import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*
JSX 문법 규칙

1. JSX는 꼭 하나의 묶음이어야 한다
2. 열었으면 닫아야 한다
3. 변수 또는 특정 값을 표현할 때 { } 안에 작성한다.
4. 구조분해를 통해 props를 정의해두면 호출하는 위치에서 자동완성을 사용할 수 있다
*/

function PBox() {
    return <div>
        {/* <CBox /> */}
        <CBox a="김준일" b="33" />
    </div>
}

const props = {     // <CBox a="김준일" b="33"/> 처럼 속성 추가 시 해당 코드와 같은 동작을 함
    a: "김준일",
    b: "33",
}

function CBox(a, b, name, age) {
    // const {a, b} = p;    // 매개변수로 받아서 바로 구조분해 가능 함수의 매개변수가 원래는 p 였음.

    return <>
        <h1>김준일</h1>
        <h2>나이</h2>
    </>
}

createRoot(document.getElementById('root')).render(<PBox />)
