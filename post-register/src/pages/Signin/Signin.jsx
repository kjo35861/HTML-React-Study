import { Link } from "react-router";
import * as s from "./styles";
import TextInput from "../../components/TextInput/TextInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { BiUserCheck } from "react-icons/bi";

function Signin() {

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h2>로그인</h2>
                <p>아직 계정이 없으신가요? <Link to={"/auth/signup"}>회원가입</Link></p>
            </div>
            <div>
                <div>
                    <TextInput title={"사용자 이름"} name={"fullName"} />
                </div>
                <div>
                    <PasswordInput title={"비밀번호"} name={"fullName"} />
                </div>
                <label>
                    <div css={s.agree}>
                        <input type="checkbox" />
                        <span>로봇이 아닙니다.</span>
                    </div>
                </label>
                <div>
                    <button css={s.signinButton}><BiUserCheck />로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Signin;