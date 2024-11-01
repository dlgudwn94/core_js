/* ---------------- */
/* Condition        */
/* ---------------- */

// const result = prompt("자바스크립트의 '공식' 이름은 무엇일까요?");

// if(result === 'ECMAScript'){
//   console.log('정답입니다!');

// }else{
//   console.log('그것도 몰라?');

// }

// const result = +prompt('숫자 입력해주세요',0);

// if(typeof result !== 'number'){
//  // ... 실행 하지마!
// }

// if( result > 0 ){
//   console.log(1);

// }else if( result < 0 ){
//   console.log(-1);

// }else if( result == 0 ){
//   console.log(0);

// }

let a = 1;
let b = 5;

let result = a + b < 4 ? '미만' : '이상';

let login;

let message =
  login == '직원'
    ? '안녕하세요'
    : login == '임원'
      ? '환영합니다.'
      : login == ''
        ? '로그인이 필요합니다.'
        : '';

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('베놈 영화 봤어?');

  if (didWatchMovie) {
    console.log('그 영화 진짜 재밌더라!!!');
  } else {
    // 영화 볼거니?
    let goingToWatchMovie = confirm('영화 보러 갈래?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 볼거니??');

      if (withWho === 'you') {
        console.log('그래 좋아 같이 보자~!');
      } else {
        console.log('왜 나랑 같이 안봐?');
      }
    } else {
      console.log('나도 너 별로야');
    }
  }
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const msg = didWatchMovie.includes('yes')
  ? '영화 재밌더라 한번 봐바'
  : goingToWatchMovie.includes('yes')
    ? '언제 볼까? 재밌겠다~~!'
    : '그래...';

console.log(msg);

function render(node, isActive) {
  // 조건부 랜더링
  let template = `
    <div>${isActive ? '안녕' : '잘가'}</div>
  `;

  node.insertAdjacentHTML('beforeend', template);
}
