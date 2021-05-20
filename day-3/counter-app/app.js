// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract");
// const reset = document.querySelector(".reset");

const count = document.querySelector(".count");
const btnGroup = document.querySelector(".btn-group");

const buttonActions = (e) => {
  const target = e.target.classList;

  if (target.contains("add")) {
    count.innerHTML++;
    setColor();
  } else if (target.contains("subtract")) {
    count.innerHTML--;
    setColor();
  } else if (target.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
};

const setColor = () => {
  if (count.innerHTML < 0) {
    count.style.color = "#ffc107";
  } else if (count.innerHTML > 0) {
    count.style.color = "#0d6efd";
  } else {
    count.style.color = "#222";
  }
};

// const increment = () => {
//   count.innerHTML++;
// };

// const decrement = () => {
//   count.innerHTML--;
// };

// const resetCount = () => {
//   count.innerHTML = 0;
// };

// Event listeners
const eventListeners = () => {
  btnGroup.addEventListener("click", buttonActions);

  //   add.addEventListener("click", increment);
  //   subtract.addEventListener("click", decrement);
  //   reset.addEventListener("click", resetCount);
};
eventListeners();
