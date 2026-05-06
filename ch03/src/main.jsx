
import { useState } from 'react'
import { createRoot } from 'react-dom/client'


function App() {

    return <>
        <InputGroup/>
        <OutputGroup/>
    </>
}

function OutputGroup() {

    return <div>
        <h1>사용자이름: </h1>
        <h1>비밀번호: </h1>
    </div>
}

function InputGroup() {

    return <div>
        <LabelInput title={'사용자이름'} id={'username'} type={'text'}/>
        <LabelInput title={'비밀번호'} id={'password'} type={'password'}/>
    </div>
}

function LabelInput({title, id, type}) {
    
    const [text, setText] = useState

    const handleOnChange = (e) => {
        console.log(e.target.value);
    }

    return <div>
        <label htmlFor={id}>{title}</label>
        <input type={type} id={id} onChange={handleOnChange}/>
    </div>
}

createRoot(document.getElementById('root')).render(<App />)
