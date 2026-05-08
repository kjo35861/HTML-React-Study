import { css } from "@emotion/react";


export const box = css`
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* border: 1px solid black; */
    box-shadow: 0 0 5px gray;
    margin: auto;
    border-radius: 4px;
    padding: 30px;
    width: 340px;
`


export const card = css`
    box-sizing: border-box;
    box-shadow: 0 0 5px gray;
    border-radius: 4px;
    margin: auto;
    padding: 20px;
    width: 340px;
`

export const inBox = css`
    /* margin-bottom: 10px; */

    & > input {
        outline: none;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        margin-bottom: 10px;
        padding: 10px;
        width: 100%;
        height: 40px;
        cursor: pointer;

        &:hover {
            box-shadow: 0 0 3px #00000033;
        }

        &:active {
            box-shadow: 0 0 3px #00000033 inset;
        }

        &:focus {
            box-shadow: 0 0 3px blue inset;
        }
    }

    & > button {
        background-color: black;
        border: none;
        color: white;
        margin-bottom: 0;
        border-radius: 4px;
        width: 100%;
        height: 30px;
        cursor: pointer;

        &:hover {
            background-color: skyblue;
        }

        &:active {
            background-color: red;
        }
    }
`