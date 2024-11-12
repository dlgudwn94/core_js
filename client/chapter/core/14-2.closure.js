function earth() {
  let water = true;
  let gravity = 10;

  return (value) => [water, gravity];
}

const ufo = earth();

ufo(false);

// 개념은 이해 했습니다. 근데, 어디다 써요?

const button = document.querySelector('button');

const handleClick = (() => {
  let clicked = false;

  return () => {
    if (!clicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    clicked = !clicked;
  };
})();

button.addEventListener('click', handleClick);
