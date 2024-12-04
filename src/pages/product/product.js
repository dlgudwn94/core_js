function renderProduct() {
  const tag = `
    <div class="container">
      <ul>
        <li>
          <a href="/">
            <figure>
              <img src="/src/assets/visual.webp" alt="" />
            </figure>
            <span class="brand">오로</span>
            <span class="description">[HypeCart 단독]웜 에어리 크롭 푸퍼 패딩_5Color</span>
            <span class="price">78000원</span>
            <div>
              <span class="discount">30%</span>
              <span class="real-price">54600원</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", tag);
}

renderProduct();
