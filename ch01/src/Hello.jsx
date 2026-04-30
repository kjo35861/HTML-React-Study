import { useState } from "react";


function Hello () {
    const text = "헬로";
    const [name, setName] = useState();
    
    const onClick = () => {
        setName(text);
        // console.log(name);
        // if (name === "헬로") {           // 와따리 가따리
        //     setName("바이");
        // } else if (name === "바이") {
        //     setName(text);
        // }
    }

    return (
        <div>
            <button onClick={onClick}>클릭</button>
            <h1>{name}</h1>
        </div>
    )
}

export function Hi() {
    const [numb, setNumb] = useState(0);
    
    const onClickPlus = () => {
        setNumb(numb + 1);
    }

    const onClickMin = () => {
        setNumb(numb - 1);
    }
    
    return (
        <div>
            <button onClick={onClickPlus}>1증가</button>
            <button onClick={onClickMin}>1감소</button>
            <h1>{numb}</h1>
        </div>
    )
}

export function Bye() {

    return (
        <h1>Bye</h1>
    )
}

export default Hello;