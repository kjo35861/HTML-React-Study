
import { useState } from 'react'
import { createRoot } from 'react-dom/client'


function App() {
    const [usernameText, setUsernameText] = useState();
    const [passwordText, setPasswordText] = useState();

    const [text, setText] = useState();

    const handleOnChange = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
    }

    return
    <>
        <input type="text" onChange={handleOnChange} />
        <h1>출력: {text}</h1>

        <InputGroup setUsernameText={setUsernameText} setPasswordText={setPasswordText}/>
        <OutputGroup usernameText={usernameText} passwordText={passwordText} />
    </>
}

function OutputGroup({usernameText, passwordText}) {

    return
    <div>
        <h1>사용자이름: {usernameText} </h1>
        <h1>비밀번호: {passwordText} </h1>
    </div>
}

function InputGroup({setUsernameText, setPasswordText}) {

    return
    <div>
        <LabelInput title={'사용자이름'} id={'username'} type={'text'} setText={setUsernameText}/>
        <LabelInput title={'비밀번호'} id={'password'} type={'password'} setText={setPasswordText}/>
    </div>
}

function LabelInput({ title, id, type, setText }) {

    return
    <div>
        <label htmlFor={id}>{title}</label>
        <input type={type} id={id} onChange={handleOnChange}/>
    </div>
}

createRoot(document.getElementById('root')).render(<App />)
