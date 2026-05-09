import { useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard";
import CardNumbs from "../CardNumbs/CardNumbs";



function CardCheck() {

    // if (!firstNumb) {
    //     setFirstNumb(getPickNumb);
    // } else if (firstNumb) {
    //     setSecondNumb(getPickNumb);
    // }

    const cardLength = new Array(12).fill("");                      // Array의 길이를 변수로 잡으면 Home에서 원하는 갯수를 받아와서 그 수만큼 카드생성 가능 <- 이렇게 쓸려면 numbList도 수정해야함
    const [numbList, setNumbList] = useState([1, 2, 3, 4, 5, 6]);   // backCard 에 표시 될 숫자
    const [getNumbList, setGetNumbList] = useState([]);
    


    useEffect(() => {
        const newGetNumbList = [];
        const Count = {};
        for (let i = 0; i < 12; i++) {
    
            const getNumb =
                CardNumbs(numbList, Count);
    
            newGetNumbList.push(getNumb);
        }

        setGetNumbList(newGetNumbList)
    }, [])
    // CardNumbs({ numbList, setNumbList, countNumb, setCountNumb })            // 반복문에 이런식으로 컴포넌트 호출을 걸면 안됨.

    const handleCardOnClick = (index, getPickNumb) => {
        console.log(`${index}카드 클릭`);

        console.log(firstNumb);
        console.log(secondNumb);

    }

    return <>
        {
            cardLength.map((_, index) => (
                <GameCard
                    key={index}
                    getNumb={getNumbList[index]}
                    onClick={() => handleCardOnClick(index, getNumbList[index])}
                />
            ))
        }

    </>
}


export default CardCheck