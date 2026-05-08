import { css } from "@emotion/react";
import image from "./images/image.jpg"

export const layout = css`
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
    width: 160px;
    height: 220px;
    background-color: #e9dddd;
    box-shadow: 0 0 10px #ffffff88;
    cursor: pointer;

    &:hover {
        transform: scale(105%);
    }
`;


export const container = css`
    position: relative;
    border-radius: 8px;
    width: 100%;
    height: 100%;
`;

export const card = css`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`
                                            // 회전을 시키려 했더니 3D 어쩌구 처음보는걸 쓰라해서 최대한 배운내용에서 만듦
export const frontCard = css`
    background-image: url(${image});        // @emotion css에서는 ./images/image.jpg 가 작동하지 않음. import 받아와서 객체로 넣어야한다.
`

export const backCard = css`
    font-size: 50px;
    font-weight: 600;
    color: #dbdbdb;
    background-color: #2a0c6e;
`
