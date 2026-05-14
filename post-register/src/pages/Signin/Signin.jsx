import { Link, useNavigate } from "react-router";
import * as s from "./styles";
import TextInput from "../../components/TextInput/TextInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { BiUserCheck } from "react-icons/bi";
import { useState } from "react";

function Signin() {

    // const tempUser = {
    //     id: 1,
    //     password: "1q2w3e4r!",
    //     email: "test1234@gmail.com",
    //     fullName: "홍길동",
    // }
    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        email: "test1234@gmail.com",
        password: "1q2w3e4r!",
    });

    const requestSignin = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const foundUser = users.find(user => user.email === email && user.password === password);
        if (!foundUser) {
            throw {
                status: 401,
                data: "로그인 실패",
            }
        }

        return {
            status: 200,
            data: {
                accessToken: JSON.stringify({ secret: "abcd1234", userId: foundUser.id }),
            },   // 나중에 JWT로 대체
        }
    }

    const handleInputOnChange = (e) => {
        setInputValues(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSigninOnClick = async () => {
        try {
            const response = await requestSignin(inputValues.email, inputValues.password);
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/", {
                replace: true,
            })
            console.log(response);
        } catch (error) {
            alert(error.data);
        }




        // localStorage.setItem("loginUser", JSON.stringify(tempUser));
        // const userJson = localStorage.getItem("loginUser");
        // const user = JSON.parse(userJson);
        // console.log(user);
    }

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h2>로그인</h2>
                <p>아직 계정이 없으신가요? <Link to={"/auth/signup"}>회원가입</Link></p>
            </div>
            <div>
                <div>
                    <TextInput title={"이메일"} name={"email"} value={inputValues.email} onChange={handleInputOnChange} />
                </div>
                <div>
                    <PasswordInput title={"비밀번호"} name={"password"} value={inputValues.password} onChange={handleInputOnChange} />
                </div>
                <label>
                    <div css={s.agree}>
                        <input type="checkbox" />
                        <span>로봇이 아닐까요?</span>
                    </div>
                </label>
                <div>
                    <button css={s.signinButton} onClick={handleSigninOnClick}><BiUserCheck />로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Signin;