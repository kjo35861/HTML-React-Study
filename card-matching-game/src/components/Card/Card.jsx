import { useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard";



function Card({ cardList, setCardList }) {

    const [firstPick, setFirstPick] = useState();
    const [secondPick, setSecondPick] = useState();
    const [matched, setMatched] = useState(false);

    const gameCardOnClick = (card) => {

        if (firstPick && secondPick) return;
        if (card.flip) return;

        const newCardList = cardList.map((newCard) => {

            if (newCard.id === card.id) {
                return {
                    ...newCard,
                    flip: true,
                }
            };
            return newCard
        })
        setCardList(newCardList);

        if (!firstPick) {
            setFirstPick(card);
        } else {
            setSecondPick(card);
        }


        // console.log(firstPick);
        // console.log(secondPick);
    }

    useEffect(() => {
        if (!firstPick && !secondPick) return;

        if (firstPick.number === secondPick.number) {

            const newCardList = cardList.map((card) => {
                if (card.id === firstPick.id || card.id === secondPick.id) {
                    return {
                        ...card,
                        remove: true,
                    }
                };
                return card
            })
            setCardList(newCardList);
            setFirstPick();
            setSecondPick();

        } else if (firstPick.number !== secondPick.number) {

            const newCardList = cardList.map((card) => {
                if (card.id === firstPick.id || card.id === secondPick.id) {
                    return {
                        ...card,
                        flip: false,
                    }
                };
                return card
            })
            setCardList(newCardList);
            setFirstPick();
            setSecondPick();
        }
    }, [secondPick])

    return <>{
        cardList.map((card) =>

            <GameCard key={card.id} getNumb={card.number} flip={card.flip} remove={card.remove} onClick={() => gameCardOnClick(card)} />
        )

    }

    </>
}

export default Card;