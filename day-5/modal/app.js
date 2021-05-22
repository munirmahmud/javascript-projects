const cardBtns = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modal = document.querySelector(".modal-inner");

const handleClick = (e) => {
  const button = e.target;
  const card = button.closest(".card");
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;

  modal.innerHTML = `
    <img src="${imgSrc}" alt="${desc}" />
  `;

  if (modalOuter.classList.contains("open")) {
    modalOuter.classList.remove("open");
  } else {
    modalOuter.classList.add("open");
  }
};

cardBtns.forEach((button) => button.addEventListener("click", handleClick));

const closeModal = () => {
  modalOuter.classList.remove("open");
};

modalOuter.addEventListener("click", (e) => {
  const isOutside = !e.target.closest(".modal-inner");

  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  console.log(e.target);
  if (e.key === "Escape") {
    closeModal();
  }
});
