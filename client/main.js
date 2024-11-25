import { getNode, setStorage, getStorage, deleteStorage } from './lib/index.js';

const textField = getNode('#textField');
const clearButton = getNode('button[data-name="clear"]');

// 1. 인풋 이벤트 바인딩
//     - 인풋(textarea) 태그 선택
//     - addEventListener('input',handler)
//     - handler 함수 안에서 값 가져오기 (this.value)

// 2. 인풋 값을 로컬 스토리지에 저장(타이핑 하는 순간 순간마다)
//     - setStorage(key,value)

// 3. init 함수 안에서 로컬스토리지에 있는 값을 가져와 인풋의 value로 설정
//     - getStorage
//     - text.value = value

// 4. 새로고침 => 데이터 유지

// 5. clear 버튼 클릭시 데이터 제거 (로컬스토리지, 인풋값)

function handleInput() {
  const value = this.value;
  setStorage('text', value);
}

function handleClear() {
  textField.value = '';
  deleteStorage('text');
}

function init() {
  getStorage('text').then((res) => (textField.value = res));
}

textField.addEventListener('input', handleInput);
clearButton.addEventListener('click', handleClear);

init();
