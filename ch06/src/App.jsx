import { useEffect } from "react";
import { useState } from "react"

function App() {
  
  const [saveUserList, setSaveUserList] = useState([]);
  
  const [currentPage, setCurrentPage] = useState();
  const [pages, setPages] = useState({
    number: <Number />,
    table: <Table />,
    table2: <Table2 saveUserList={saveUserList} setSaveUserList={setSaveUserList} />,
  });

  useEffect(() => {
    console.log(saveUserList)
    setCurrentPage(pages.table2);
  }, [saveUserList])

  const handlePageButtonOnClick = (e) => {
    setCurrentPage(pages[e.target.value]);
  }

  return (
    <>
      <header>
        <button value={"number"} onClick={handlePageButtonOnClick}>Number</button>
        <button value={"table"} onClick={handlePageButtonOnClick}>Table</button>
        <button value={"table2"} onClick={handlePageButtonOnClick}>Table2</button>
      </header>
      <main>
        {currentPage}
      </main>
    </>
  )
}

function Number() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
  const h1Numbers = numbers.map(n => <h1>{n}</h1>)

  return (
    <>
      {numbers}
      {h1Numbers}
      {numbers.map(n => <h2>{n}</h2>)}
    </>
  )
}

function Table() {
  const students = [
    { no: 1, name: "김준일", age: 33 },
    { no: 2, name: "김준이", age: 34 },
    { no: 3, name: "김준삼", age: 35 },
    { no: 4, name: "김준사", age: 36 },
    { no: 5, name: "김준오", age: 37 },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map(n =>
              <tr>
                <td>{n.no}</td>
                <td>{n.name}</td>
                <td>{n.age}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

function Table2({saveUserList, setSaveUserList}) {

  const [checkText, setCheckText] = useState({
    no: "",
    name: "",
    age: "",
  });

  const handleAddButtonOnClick = (e) => {
    
    setSaveUserList([
      ...saveUserList,
      // checkText,   // {...checkText} 로 추가하면 재정의가 가능(깊은 복사)
      { no: checkText.no, name: checkText.name, age: checkText.age },
    ])
  }

  const handleOnChange = (e) => {
    setCheckText({
      ...checkText,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div>
        <input type="text" name="no" onChange={handleOnChange} placeholder="No."/>
        <input type="text" name="name" onChange={handleOnChange} placeholder="Name"/>
        <input type="text" name="age" onChange={handleOnChange} placeholder="Age"/>
        <button onClick={handleAddButtonOnClick}>추가</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            saveUserList.map(n =>
              <tr>
                <td>{n.no}</td>
                <td>{n.name}</td>
                <td>{n.age}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
