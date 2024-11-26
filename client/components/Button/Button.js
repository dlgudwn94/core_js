export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.state = {
      active: this.getAttribute('active') || false,
    };

    this.render();
  }
  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      this.state.active = newValue === 'true';
      this.render();
    }
  }

  // 클릭 이벤트 바인딩
  handleClick() {
    const newActiveState = !this.state.active;
    this.setAttribute('active', newActiveState);
  }

  render() {
    const { active } = this.state;

    this.shadowRoot.innerHTML = `
    <style>
      @import url('./components/Button/Button.css');
      
      button{
        background-color: ${active ? 'orange' : '#ff7272'}
      }
    </style>
    <button 
      type="button",
      aria-pressed="${active}",
      aria-label="${active ? '활성화' : '비활성화'}"
    >
      ${active ? '🐯' : '❌'}
    </button>
  `;

    this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick.bind(this));
  }
}
