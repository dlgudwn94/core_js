import { Button } from './components/Button/Button.js';

const app = document.getElementById('app');

function defineElements() {
  customElements.define('custom-button', Button);
}

defineElements();

const buttonElement = document.createElement('custom-button');

app.append(buttonElement);
