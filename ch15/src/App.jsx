import * as s from "./styles"

function App() {



  return (
    <>
      <div css={s.card}>
        <div css={s.inBox}>
          <input type="text" placeholder="사용자 이름" />
        </div>
        <div css={s.inBox}>
          <input type="password" placeholder="비밀번호" />
        </div>
        <div css={s.inBox}>
          <button css={s.button}>너무 피곤하고</button>
        </div>
      </div>
    </>
  )
}

export default App
