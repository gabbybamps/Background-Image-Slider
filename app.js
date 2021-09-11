const buttons = document.querySelectorAll(`.btn`);
const container = document.querySelector(`.img-container`);

const imgs = ["1", "2", "3", "4"];

let counter = 0;

const slideImage = function () {
  buttons.forEach(function (button) {
    button.addEventListener(`click`, function () {
      if (button.classList.contains(`btn-left`)) {
        counter--;
        if (counter < 0) {
          counter = imgs.length - 1;
        }
        container.style.background = `url('./img/${imgs[counter]}.jpg')`;
      }

      if (button.classList.contains(`btn-right`)) {
        counter++;
        if (counter > imgs.length - 1) {
          counter = 0;
        }
        container.style.background = `url('./img/${imgs[counter]}.jpg')`;
      }
    });
  });
};

slideImage();

// let curImage = imgs[Math.round((imgs.length - 1) / 2)];
