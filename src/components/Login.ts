import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "../Layout/resetCSS";
import pb from "../api/pocketbase";

@customElement("login-element")
class Login extends LitElement {
  static styles: CSSResultGroup = [
    resetCSS,
    css`
      .container {
        max-width: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        & h1 {
          font-size: 3rem;
          font-weight: bold;
        }

        & hr {
          margin: 2rem 0;
          height: 4px;
          background-color: white;
        }

        & form {
          margin-bottom: 5rem;

          & input {
            box-sizing: border-box;
            border: 1px solid rgb(122, 122, 122);
            padding: 1rem;
            min-width: 300px;
            margin: 0.2rem 0;
            outline: none;

            &:focus {
              border: 1px solid dodgerblue;
            }
          }

          & button[type="submit"] {
            margin-top: 1.5rem;
            border: none;
            background: dodgerblue;
            color: white;
            padding: 1rem;
            cursor: pointer;
            width: 100%;
          }
        }
      }
    `,
  ];

  async fetchData() {
    const id = "seonbeom2@gmail.com";
    const pw = "dkssud123!@";

    pb.collection("users").authWithPassword(id, pw);
  }

  handleLogin(e: Event) {
    e.preventDefault();
    this.fetchData();
  }

  render() {
    return html`
      <div class="container">
        <h1>로그인</h1>
        <hr />
        <form>
          <div>
            <label for="idField"></label>
            <input type="email" id="idField" placeholder="아이디(이메일)" />
          </div>
          <div>
            <label for="pwField"></label>
            <input type="password" id="pwField" placeholder="비밀번호" />
          </div>
          <button @click=${this.handleLogin} type="submit" class="login">LOGIN</button>
        </form>

        <a class="register" href="/src/pages/register/">간편 회원가입</a>
      </div>
    `;
  }
}
