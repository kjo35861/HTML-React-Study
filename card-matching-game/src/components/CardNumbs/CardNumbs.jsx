import { useState } from "react";

// function CardNumbs({ numbList, setNumbList, countNumb, setCountNumb }) {

//     const [randomNumber] = useState(() => {

//         if (numbList.length === 0) {
//             return null;
//         }

//         const number = numbList[Math.floor(Math.random() * numbList.length)]

//         const numbCount = (countNumb[number] || 0) + 1

//         setCountNumb(numb => ({
//             ...numb,
//             [number]: numbCount,
//         }));

//         if(numbCount >= 2) {
//             setNumbList(numb => numb.filter(num => num !== number))
//         };

//         return number;
//     });

//     return randomNumber;
// }                            // 아오 진짜 ㅁㅈㄷㄻㅈㄷㄻㅈㄷㄼㅈ34ㄼㅁㅈㄷㄱㄼㅎㅂ서ㅜㅛㅡ교ㅕㅏㅡㅂㅈㄷㄱㄹ

function CardNumbs(numbList, countNumb) {

    if (numbList.length === 0) {    // 배열안에 값?이 없으면 null 반환. while문 안에 넣어버려도 상관없을듯?
        return null;
    }

    while (true) {                  // while(true) 로 잡아두면, 리턴이 발생하면 반복이 멈춤.

        const number =
            numbList[Math.floor(Math.random() * numbList.length)];  // Math.random()으로 작성시 0~1 사이에서 랜덤한 값을 가져옴. / numbList의 길이 6 / Math.floor 소숫점 제거 / ex) 0.3 * 6 = 1.8 -> numbList[1] 이런 식
            // console.log(Math.random());
            // console.log(numbList.length);
            // console.log((Math.random() * numbList.length));              // 진짜 멍청하게 이렇게 찍어보지 말자. 해당 콘솔 출력은 출력마다 새로운 Math.random() 값을 출력하는 코드.
            // console.log(Math.floor(Math.random() * numbList.length));    // 이렇게 찍고 출력했다가 이상해서 한참을 헤맴

            // const random = Math.random();                                // 이렇게 변수로 저장해두고 콘솔로 출력할것
        if ((countNumb[number] || 0) < 2) {
            countNumb[number] = (countNumb[number] || 0) + 1;

            return number;
        }
    }
}


export default CardNumbs;