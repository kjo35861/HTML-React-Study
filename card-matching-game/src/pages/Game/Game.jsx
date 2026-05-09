import { useParams } from "react-router-dom";
import * as s from "./styles"
import { GiCardRandom, GiRocketThruster } from "react-icons/gi";
import { css } from "@emotion/react";
import GameCard from "../../components/GameCard/GameCard";
import CardNumbs from "../../components/CardNumbs/CardNumbs";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";



function Game() {
    const params = useParams();

    const cardLength = new Array(12).fill("").length;                      // Array의 길이를 변수로 잡으면 Home에서 원하는 갯수를 받아와서 그 수만큼 카드생성 가능 <- 이렇게 쓸려면 numbList도 수정해야함
    const [numbList, setNumbList] = useState([1, 2, 3, 4, 5, 6]);  
    const [getNumbList, setGetNumbList] = useState([]);
    const [cardList, setCardList] = useState([])
    // const card = {
    //     id: "",
    //     number: "",
    //     flip: false,
    //     remove: false,
    // }

    const [firstNumb, setFirstNumb] = useState();
    const [secondNumb, setSecondNumb] = useState();


    useEffect(() => {
        const newGetNumbList = [];
        const Count = {};

        let newCardList = [];
        for (let i = 0; i < cardLength; i++) {

            const getNumb = CardNumbs(numbList, Count);

            newCardList = [
                ...newCardList,
                {
                    id: i,
                    number: getNumb,
                    flip: false,
                    remove: false,
                }
            ];

            newGetNumbList.push(getNumb);
        }

        setGetNumbList(newGetNumbList)
        setCardList(newCardList)

    }, [])
    // CardNumbs({ numbList, setNumbList, countNumb, setCountNumb })            // 반복문에 이런식으로 컴포넌트 호출을 걸면 안됨.



    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCHING GAME<GiCardRandom /></h1>
                <h3>플레이어: {params.username}</h3>
            </header>
            <main>
                {/* {
                    cardLength.map((_, index) => (
                        <GameCard
                            key={index}
                            getNumb={getNumbList[index]}
                        />
                    ))
                } */}
                {/* {
                    cardList.map((card) => (
                        <Card key={card.id} number={card.number} flip={card.flip} remove={card.remove}/>
                    ))
                } */}
                <Card cardList={cardList} setCardList={setCardList}/>
            </main>
        </div>

    </>
}



export default Game;