const buttonDVD = document.querySelector(".button_close_trap");
const popupElement = document.querySelector(".popup");
console.log(popupElement);
const POPUP_WIDTH = popupElement.getBoundingClientRect().width;
const POPUP_HEIGHT = popupElement.getBoundingClientRect().height;
let x = Math.random() * (POPUP_WIDTH - 150);
let y = Math.random() * (POPUP_HEIGHT - 80);
let dx = 5;
let dy = 3;

function animate() {
  const rect = buttonDVD.getBoundingClientRect();

  if (x + rect.width >= POPUP_WIDTH || x <= 0) {
    dx = -dx;
    buttonDVD.style.background = `linear-gradient(45deg, 
      rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}),
      rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}),
      rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})
    )`;
  }
  if (y + rect.height >= POPUP_HEIGHT || y <= 0) {
    dy = -dy;
    buttonDVD.style.background = `linear-gradient(45deg, 
      rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}),
      rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}),
      rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})
    )`;
  }

  x += dx;
  y += dy;

  buttonDVD.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(animate);
}

animate();
