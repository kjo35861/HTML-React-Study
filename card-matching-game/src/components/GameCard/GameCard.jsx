import { useEffect, useState } from "react";
import * as s from "./styles"
import CardNumbs from "../CardNumbs/CardNumbs";

function GameCard({ getNumb, flip, remove, onClick }) {


    //   뒷면(backCard) = 그림 / 앞면(frontCard) = 카드의 뒷면
    return <>

        {
            <div css={[s.layout, remove&&s.removeCard]} onClick={onClick}>
                <div css={s.container} >
                    {
                        flip ? (remove && flip ? <div css={[s.backCard, s.card]}>{getNumb}</div> : <div css={[s.backCard, s.card]}>{getNumb}</div>)
                            : <div css={[s.frontCard, s.card]}></div>
                    }
                </div>
            </div>
        }
    </>
}

export default GameCard;