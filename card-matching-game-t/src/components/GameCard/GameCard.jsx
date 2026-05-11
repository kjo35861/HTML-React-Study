import * as s from "./styles";

function GameCard({ card, onClick }) {




    return <div css={s.scene}>
        <div css={s.layout(card.isOpen)} onClick={onClick}>
            <div css={s.front}>
                {card.content}
            </div>
            <div css={s.back}>
                <div css={s.container}>
                </div>
            </div>
        </div>
    </div>

}

export default GameCard;