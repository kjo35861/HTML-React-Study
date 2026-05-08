import { useParams } from "react-router-dom";
import * as s from "./styles"
import { GiCardRandom } from "react-icons/gi";
import { css } from "@emotion/react";
import GameCard from "../../components/GameCard/GameCard";
import CardNumbs from "../../components/CardNumbs/CardNumbs";
import { useState } from "react";



function Game() {
    const params = useParams();

    const [numbList, setNumbList] = useState([1, 2, 3, 4, 5, 6]);   // backCard 에 표시 될 숫자
    // const [countNumb, setCountNumb] = useState({});                 // 숫자 뽑은 횟수 저장

    const getNumbList = [];
    const Count = {};
    for (let i = 0; i < 12; i++) {

        const getNumb =
            CardNumbs(numbList, Count);

        getNumbList.push(getNumb);
    }
    // CardNumbs({ numbList, setNumbList, countNumb, setCountNumb })            // 반복문에 이런식으로 컴포넌트 호출을 걸면 안됨.


    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCHING GAME<GiCardRandom /></h1>
                <h3>플레이어: {params.username}</h3>
            </header>
            <main>
                {
                    Array.from({ length: 12 }).map((_, index) => (              // Array 다시 공부. 이 부분은 AI 도움 받음
                        <GameCard
                            key={index}
                            getNumb={getNumbList[index]}
                        />
                    ))
                }

            </main>
        </div>

    </>
}

export default Game;