/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// import { data } from './data.js';

// const buttons = document.querySelectorAll('.nav button');
// const liElements = document.querySelectorAll('li');

// function setBgcolor(colorA, colorB) {
//   const body = document.body;
//   const setBg = `linear-gradient(to bottom, ${colorA}, ${colorB})`;

//   body.style.background = setBg;
// }
// function setImage(name, alt) {
//   const target = document.querySelector('.container .visual div img');
//   target.src = `./assets/${name}.jpeg`;
//   target.alt = alt;
// }
// function setNameText(name) {
//   const target = document.querySelector('.container .nickName');
//   target.textContent = name;
// }

// buttons.forEach((button) => {
//   button.addEventListener('click', function () {
//     liElements.forEach((li) => li.classList.remove('is-active'));
//     const li = this.closest('li');
//     li.classList.add('is-active');

//     const index = li.dataset.index - 1;
//     const {
//       color: [colorA, colorB],
//       name,
//       alt,
//     } = data[index];
//     // let colorA, colorB, name, alt;
//     // colorA = data[index].color[0];
//     // colorB = data[index].color[1];
//     // name = data[index].name;
//     // alt = data[index].alt;
//     setBgcolor(colorA, colorB);
//     setImage(name, alt);
//     setNameText(name);
//   });
// });

import data from './data.js';
import { getNode, addClass, removeClass } from '../lib/index.js';
import { AudioPlayer } from './audio.js';

const nav = getNode('.nav');
const list = [...nav.lastElementChild.children];
const title = getNode('.nickName');
const img = getNode('.visual img');

const audioList = [];

function createAudioList(data) {
  data.forEach(({ name }) => {
    audioList.push(new AudioPlayer(`./assets/audio/${name}.m4a`));
  });
}

function setName(data) {
  title.textContent = data.name;
}

function setBgColor({ target = document.body, colorA, colorB = '#000' }) {
  target.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function setImage(target, data) {
  // if(target.tagName === 'IMG'){
  if (target.hasAttribute('src')) {
    target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
    target.alt = data.alt;
  }
}

function setAudioPlayer(index) {
  audioList.forEach((sound) => {
    sound.stop();
  });

  if (index === 1 || index === 3) {
    audioList[index].volume = 0.2;
  }

  audioList[index].play();
}

function handleNavigationClick(e) {
  const target = e.target.closest('li');

  if (!target) return;

  const index = target.dataset.index - 1;
  const source = data[index];

  setName(source);
  setBgColor({ colorA: source.color[0], colorB: source.color[1] });
  createAudioList(data);
  setAudioPlayer(index);

  setImage(img, source);

  const audio = new AudioPlayer(`./assets/audio/${source.name}.m4a`);

  list.forEach((li) => removeClass(li, 'is-active'));

  addClass(target, 'is-active');
}

nav.addEventListener('click', handleNavigationClick);
