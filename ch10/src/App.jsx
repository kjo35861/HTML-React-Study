import { useEffect, useState } from "react"


function App() {

  const [ state1, setState1 ] = useState(10);
  const [ state2, setState2 ] = useState(20);
  const [ state3, setState3 ] = useState(0);
  const [ clicked, setClicked ] = useState(false);
  const [ isFetching, setIsFetching ] = useState(false);

  const handleOnClick = () => {
    setState1(state1 * 10);
    setClicked(true);
    setIsFetching(true);
  }

  useEffect(() => {
    if (clicked) {
      setState2(state1 + state2);
    }
  }, [state1])

  useEffect(() => {
    if (clicked) {
      setState3(state1 + state2);
      setClicked(false);
      setIsFetching(false);
    }
  }, [state2])

  return (
    <>
      <button onClick={handleOnClick}>실행</button>
      {
        isFetching || <>
          <h1>{state1}</h1>
          <h1>{state2}</h1>
          <h1>{state3}</h1>
        </>
      }
      <h1>{state1}</h1>
      <h1>{state2}</h1>
      <h1>{state3}</h1>
    </>
  )
}

export default App
