import { useEffect, useState } from "react";





function App() {

  const [count, setCount] = useState(0);

  const handleAddOnClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    if (count !== 0) {
      console.log('현재 카운트:', count)
    }
  }, [count])

  return (<>
    <p>카운트: {count}</p>
    <button onClick={handleAddOnClick}>+</button>
  </>
  )
}


export default App
