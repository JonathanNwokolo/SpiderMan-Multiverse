function handleMouseEnter() {
  this.classList.add("s-card--hovered");
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove("s-card--hovered");
  document.body.id = "";
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName("s-card");

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  }

  // Marca o primeiro card como frontal
  if (cardElements.length > 0) {
    cardElements[0].classList.add("s-card--front");
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector(".s-cards-carousel");
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYDeg}deg)`,
  );

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector(
    ".s-controller__button--active",
  );
  activeButtonElement.classList.remove("s-controller__button--active");
  selectedButtonElement.classList.add("s-controller__button--active");

  // Atualiza qual card está com a face frontal
  const allCards = document.getElementsByClassName("s-card");
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove("s-card--front");
  }
  allCards[Number(selectedItem) - 1].classList.add("s-card--front");
}
