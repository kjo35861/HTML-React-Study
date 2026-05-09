import { useState } from "react";


function CardNumbs(numbList, countNumb) {

    if (numbList.length === 0) {    // 배열안에 값?이 없으면 null 반환. while문 안에 넣어버려도 상관없을듯?
        return null;
    }

    while (true) {                  // while(true) 로 잡아두면, 리턴이 발생하면 반복이 멈춤.

        const number =
            numbList[Math.floor(Math.random() * numbList.length)];  // Math.random()으로 작성시 0~1 사이에서 랜덤한 값을 가져옴. / numbList의 길이 6 / Math.floor 소숫점 제거 / ex) 0.3 * 6 = 1.8 -> numbList[1] 이런 식
        if ((countNumb[number] || 0) < 2) {
            countNumb[number] = (countNumb[number] || 0) + 1;

            return number;
        }
    }
}


export default CardNumbs;