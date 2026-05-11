const topButton = document.querySelector(".to-top");

const updateVisibility = (element, isVisible) => {
  element.classList.toggle("to-top--hidden", !isVisible);
};

const isPastScrollThreshold = (threshold) => {
  return window.scrollY >= threshold;
};

const handleScroll = () => {
  updateVisibility(topButton, isPastScrollThreshold(150));
};

window.onscroll = handleScroll;
