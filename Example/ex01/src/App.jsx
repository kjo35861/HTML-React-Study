import { use, useState } from "react"


function App() {

  const [productList, setProductList] = useState([]);

  const [currentPage, setCurrentPage] = useState("Home");
  const getPages = () => ({       // 해당 부분 이해 필요
    Home: <Home />,
    Profile: <Profile />,
    Settings: <Settings />,
    Numb1: <NumbList1 />,
    Numb2: <NumbList2 />,
    Numb3: <NumbList3 />,
    Product1: <ProductList1 />,
    Product2: <ProductList2 
      productList={productList}
      setProductList={setProductList}
      />,
  });

  const handlePageButtonOnClick = (e) => {
    setCurrentPage(e.target.value);
  }

  return (
    <>
      <header>
        <button value={"Home"} onClick={handlePageButtonOnClick}>Home</button>
        <button value={"Profile"} onClick={handlePageButtonOnClick}>Profile</button>
        <button value={"Settings"} onClick={handlePageButtonOnClick}>Settings</button>
        <button value={"Numb1"} onClick={handlePageButtonOnClick}>Numb1</button>
        <button value={"Numb2"} onClick={handlePageButtonOnClick}>Numb2</button>
        <button value={"Numb3"} onClick={handlePageButtonOnClick}>Numb3</button>
        <button value={"Product1"} onClick={handlePageButtonOnClick}>Product1</button>
        <button value={"Product2"} onClick={handlePageButtonOnClick}>Product2</button>
      </header>
      <div>
        {/* {currentPage} */}
        {getPages()[currentPage]}
      </div>
    </>
  )
}

function Home() {
  return (<>
    <h1>가</h1>
  </>)
}

function Profile() {
  return (<>
    <h1>나</h1>
  </>)
}

function Settings() {
  return (<>
    <h1>다</h1>
  </>)
}

function NumbList1() {

  const numb = [10, 20, 30, 40, 50];

  return (<>
    <div>{numb}</div>
  </>)
}

function NumbList2() {

  const numb = [10, 20, 30, 40, 50];
  const h1numb = numb.map(n => <p>{n}</p>)

  return (<>
    {h1numb}
  </>)
}

function NumbList3() {

  const numb = [10, 20, 30, 40, 50, 60];


  return (<>
    {numb.map(n => <p>{n}</p>)}
  </>)
}

function ProductList1() {

  const productList = [
    { id: 1, name: "김준일", price: 10 },
    { id: 2, name: "김준이", price: 20 },
    { id: 3, name: "김준삼", price: 30 },
    { id: 4, name: "김준사", price: 40 },
    { id: 5, name: "김준오", price: 50 },
  ]

  return (<>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productList.map(n =>
          <tr>
            <td>{n.id}</td>
            <td>{n.name}</td>
            <td>{n.price}</td>
          </tr>
        )}
      </tbody>
    </table>
  </>)
}

function ProductList2({ productList, setProductList }) {


  const [checkText, setCheckText] = useState({
    id: "",
    name: "",
    price: "",
  });

  const handleOnChange = (e) => {
    setCheckText({
      ...checkText,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddButtonOnClick = () => {
    setProductList([
      ...productList,
      { id: checkText.id, name: checkText.name, price: checkText.price },
    ])
  }

  return (<>
    <div>
      <input type="text" name="id" onChange={handleOnChange} placeholder="ID" />
      <input type="text" name="name" onChange={handleOnChange} placeholder="Name" />
      <input type="text" name="price" onChange={handleOnChange} placeholder="Price" />
      <button onClick={handleAddButtonOnClick}>추가</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productList.map(n =>
          <tr>
            <td>{n.id}</td>
            <td>{n.name}</td>
            <td>{n.price}</td>
          </tr>
        )}
      </tbody>
    </table>
  </>)
}

export default App
