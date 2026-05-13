

function App() {
  new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log("안녕하세요!");
      }, 1000)
    );
  }).then()

  return (
    <>

    </>
  )
}


function checkPositive(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("양수입니다: " + num);
    } else {
      reject("음수입니다: " + num);
    }
  })
}

checkPositive(5).then(msg => console.log(msg)); // "양수입니다: 5"
checkPositive(-3).catch(err => console.log(err)); // "음수입니다: -3"


const getPromise = async (value) => {
  return value
}

getPromise(10)
  .then(n => n * 2)
  .then(n => n + 5)
  .then(n => n.toString() + "원")
  .then(result => console.log(result))


Promise.resolve("hello")
  .then(str => str.toUpperCase())
  .then(str => {
    throw new Error("강제 에러 발생!");
  })
  .then(str => console.log("여기 실행될까?"))
  .catch(err => console.log("에러 잡음: " + err))
  .finally(console.log("항상 실행!"))


function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject("유효하지 않은 ID");
            } else {
                resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
            }
        }, 3000);
    });
}

fetchUser(3).then(user => console.log(user));
// (1초 후) { id: 3, name: "유저3", age: 23 }

fetchUser(-1).catch(err => console.log(err));
// (1초 후) "유효하지 않은 ID"


function fetchA() {
  return new Promise(res => setTimeout(() => res("A 데이터"), 1000));
}

function fetchB() {
  return new Promise((res, rej) => setTimeout(() => {
    rej("B 실패!")
  }, 2000));
}

function fetchC() {
  return new Promise(res => setTimeout(() => res("C 데이터"), 1500));
}

Promise.all([fetchA(), fetchB(), fetchC()])
  .then((result) => {
    console.log(result);
  })
  .catch(err => console.log(err));
// fetchB가 reject 되면 Promise.all 에서 실행한 컴포넌트 중 하나라도 실패하면 전부 실패!
// catch 로 빠진다


// then 방식
// fetchUser(3).then(user => console.log(user))
// async/await 방식으로 변환
async function main(params) {
  try {
    const user = await fetchUser(3);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}
main();



async function sequential() {
  const a = await fetchA();
  const b = await fetchB();
  const c = await fetchC();
  console.log(a, b, c);
}
// 총 소요 시간 4.5초 . 순차적으로 실행되기 때문에 한promise 가 종료되어야 다음 promise가 실행

async function parallel() {
  const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
  console.log(a, b, c);
}
// 총 소요 시간 2초 . 동시에 실행되기 때문에 가장 오래걸리는 promise의 시간만큼만 소요


async function fetchAllUsers(ids) {
  const users = [];
  // console.log(ids.length);
  for (let i = 0; i < ids.length; i++) {
    try {
      const user = await fetchUser(ids[i]);
      users.push(user);
    } catch (err) {
      console.log(err);
    }
  }
  // for문 + await로 순차 조회
  // 각 유저를 users에 push
  return users;
}

fetchAllUsers([1, 2, 3]).then(users => console.log(users));
// [{ id:1, name:"유저1", ... }, { id:2, ... }, { id:3, ... }]



async function fetchAllUsersParallel(ids) {
    // Promise.all + map 사용
    // 동시에 조회하여 결과 배열 리턴

    return Promise.all(ids.map(id => fetchUser(id)));
}
fetchAllUsersParallel([1,2,3]).then(users => console.log(users));


// ★ 문제 11과 결과는 같지만 속도가 다르다! 왜?



async function getData() {
    return "Hello";
}

const result = getData();
console.log(result);

getData().then(data => console.log(data));

// 출력 1: promise{Hello}
// 출력 2: Hello
// ★ async 함수는 항상 Promise를 리턴한다!

export default App;