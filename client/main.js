import { Button } from './components/Button/Button.js';
import { Card } from './components/Card/Card.js';
import { Counter } from './components/Counter/Counter.js';

const app = document.getElementById('app');

function defineElements() {
  customElements.define('custom-button', Button);
  customElements.define('custom-card', Card);
  customElements.define('custom-counter', Counter);
}

defineElements();

const buttonElement = document.createElement('custom-button');

// app.append(buttonElement);
