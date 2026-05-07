import { useState } from "react"


function App() {

  const basicValue = {
    username: "",
    email:"",
    password:"",
    phone:"",
  }

  const [ user, setUser] = useState();
  const [ userInfo, setUserInfo ] = useState(basicValue)


  const handleRegisterButtonOnClick = () => {
    setUser(
    {
      username: userInfo.username,
      email: userInfo.email, 
      password: userInfo.password, 
      phone: userInfo.phone,
    }
    )

    setUserInfo(basicValue)
    console.log(userInfo);
  }

  const handleOnChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
  }
  

  return (
    <>
      <div>사용자이름<input type="text" name="username" value={userInfo.username} onChange={handleOnChange} placeholder="Username"/></div>
      <div>이메일<input type="text" name="email" value={userInfo.email} onChange={handleOnChange} placeholder="Email"/></div>
      <div>비밀번호<input type="password" name="password" value={userInfo.password} onChange={handleOnChange} placeholder="Password"/></div>
      <div>연락처<input type="text" name="phone" value={userInfo.phone} onChange={handleOnChange} placeholder="Phone"/></div>
      <div><button onClick={handleRegisterButtonOnClick}>회원가입</button></div>
    </>
  )
}

export default App
