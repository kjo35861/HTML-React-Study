import { css } from "@emotion/react"

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const header = css`
    margin-bottom: 100px;

    & > h2 {
        margin: 30px 0 10px;
        font-weight: 500;
    }

    & > p {
        margin: 0;
        font-size: 14px;

        & > a {
            text-decoration: none;
            color: #34c767;
        }
    }
`;

export const agree = css`
    margin: 20px 0;
    font-size: 14px;
    font-weight: 400;
    color: #222222;
`;

export const signinButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    border-radius: 6px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #f2f1e3;
    }

    &:active {
        background-color: #e9e8da;
        transform: scale(97%);
    }
`