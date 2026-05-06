import { useState } from 'react'

function App() {
  const [outText1, setOutText1] = useState();
  const [outText2, setOutText2] = useState();
  const [inText1, setInText1] = useState();
  const [inText2, setInText2] = useState();


  const handleOnClick = (e) => {
    setOutText1(inText1)
    setOutText2(inText2)
  }

  const textCheck1 = (e) => {
    setInText1(e.target.value)
  }
  const textCheck2 = (e) => {
    setInText2(e.target.value)
  }

  
  return (
    <>
      <input type="text" onChange={textCheck1} />
      <input type="text" onChange={textCheck2} />
      <button onClick={handleOnClick}>출력</button>
      <h1>내용1: {outText1}</h1>
      <h1>내용2: {outText2}</h1>
    </>
    )
}


export default App
