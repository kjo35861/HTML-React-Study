import { useState } from "react";
import * as s from "./styles"
import CardNumbs from "../CardNumbs/CardNumbs";

function GameCard({ getNumb }) {

    // const [numbList, setNumbList] = useState([1, 2, 3, 4, 5, 6]);   // backCard 에 표시 될 숫자
    // const [countNumb, setCountNumb] = useState({});                 // 숫자 뽑은 횟수 저장           원래 여기서 CardNumbs를 뽑아오려 했는데, 최상위가 아니라 재선언 됨(?)

    const [isActive, setIsActive] = useState(false);

    const handleOnClick = () => {
        setIsActive(!isActive);
    }


    //   뒷면(backCard) = 그림 / 앞면(frontCard) = 카드의 뒷면
    return <>       
        <div css={s.layout} onClick={handleOnClick}>
            <div css={s.container}>
                {
                    isActive ?
                    <div css={[s.backCard, s.card]}>
                        {getNumb}
                    </div>
                    : <div css={[s.frontCard, s.card]}></div>
                }
            </div>
        </div>
    </>
}

export default GameCard;