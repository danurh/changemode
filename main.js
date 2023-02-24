const body = document.body;
const userInput = document.getElementById("inputValue");
const selection = document.getElementById("selection");
const card = document.getElementById("card");
const text = document.getElementById("text");
const toggle = document.getElementById("toggle");
const btn = document.getElementById("indicator");
const oCard = document.getElementById("option-card");
const button = document.getElementById("button");
const neon = document.getElementById("neon");

function update() {
  const userSelect = selection.options.selectedIndex;
  switch (userSelect) {
    case 1:
      card.style.background = userInput.value;
      break;
    case 2:
      text.style.fontFamily = userInput.value;
      break;
    case 3:
      card.style.width = userInput.value;
      break;
    case 4:
      text.style.color = userInput.value;
      break;
    case 5:
      card.style.height = userInput.value;
      break;
    case 6:
      oCard.style.boxShadow = `0 0 0.2rem white, 0 0 0.2rem white, 0 0 1rem ${userInput.value}, 0 0 0.8rem ${userInput.value}, 0 0 2.8rem ${userInput.value}, inset 0 0 1.3rem ${userInput.value}`;
      card.style.boxShadow = `0 0 0.2rem white, 0 0 0.2rem white, 0 0 1rem ${userInput.value}, 0 0 0.8rem ${userInput.value}, 0 0 2.8rem ${userInput.value}, inset 0 0 1.3rem ${userInput.value}`;
    default:
      break;
  }
}

function clickBtn() {
  body.classList.toggle("active");
  btn.classList.toggle("active");
  toggle.classList.toggle("active");
  oCard.classList.toggle("active");
  selection.classList.toggle("active");
  userInput.classList.toggle("active");
  button.classList.toggle("active");
  card.classList.toggle("active");
  neon.classList.toggle("active");
}
