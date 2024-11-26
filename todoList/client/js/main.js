import { getNode, insertLast } from '../lib/index.js';

const submitButton = getNode('.button');
const todoInput = getNode('#todo');

/* 
  submit 버튼 클릭시 input 값 가져오기
  input값을 넣은 태그를 만들고 랜더링 ul.toDoList
*/

function createItem(id, value) {
  const tag = `
    <li data-id="${id}">${value}</li>
  `;
  return tag;
}

function renderItem({ target, id, value }) {
  insertLast(target, createItem(id, value));
}

function handleSubmit(e) {
  e.preventDefault();

  const value = todoInput.value;
  const id = Date.now();

  renderItem({ target: '.toDoList', id, value });
}

submitButton.addEventListener('click', handleSubmit);
