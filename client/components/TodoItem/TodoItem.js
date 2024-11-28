import { TodoService as s } from '../../service/TodoService.js';

const todoItemTemplate = document.createElement('template');

todoItemTemplate.innerHTML = `
<style>@import url('./components/TodoItem/TodoItem.css');</style>
  <li class="item">
    <input type="checkbox" />
    <div class="content">
      <input type="text" />
    </div>
    <button type="button" class="delete-item">x</button>
  </li>
`;

export class TodoItem extends HTMLElement {
  constructor(id, value, checked) {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    this.item = this.shadowRoot.querySelector('.item');
    this.checkbox = this.item.querySelector('input[type="checkbox"]');
    this.contentInput = this.item.querySelector('input[type="text"]');
    this.deleteButton = this.item.querySelector('.delete-item');

    this.id = id;
    this.contentInput.value = value;
    this.checkbox.checked = checked;

    if (checked) {
      this.contentInput.classList.add('done');
    }
  }

  connectedCallback() {
    const value = this.contentInput.value;

    this.contentInput.value = value ? value : 'TASK' + this.id;

    this.deleteButton.addEventListener('click', () => this.handleDelete());
    this.checkbox.addEventListener('click', () => this.handleToggleChecked());
    this.contentInput.addEventListener('blur', () => this.handleUpdate());
    this.contentInput.addEventListener('keydown', (e) => this.handleEnterPress(e));

    s.AddTodoItem(this.id, this.contentInput.value, this.checkbox.checked);

    this.saveData();
  }

  handleEnterPress({ keyCode }) {
    if (keyCode === 13) {
      //

      if (this.nextElementSibling !== null) {
        const next = this.nextElementSibling.shadowRoot.querySelector('input[type="text"]');

        // this.contentInput.blur();
        next.focus();
      } else {
        this.contentInput.blur();
      }
    }
  }

  handleUpdate() {
    s.UpdateTodoItem(this.id, this.contentInput.value);
    this.saveData();
  }

  handleDelete() {
    gsap.to(this, {
      scale: 0,
      callbackScope: this,
      onComplete() {
        this.remove();
        s.DeleteTodoItem(this.id);
        this.saveData();
      },
    });
  }

  handleToggleChecked() {
    if (this.checkbox.checked) {
      this.contentInput.classList.add('done');
    } else {
      this.contentInput.classList.remove('done');
    }

    s.CheckTodoItem(this.id, this.checkbox.checked);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('todo', JSON.stringify(s.state));
  }

  render() {
    this.shadowRoot.append(todoItemTemplate.content.cloneNode(true));
  }
}
