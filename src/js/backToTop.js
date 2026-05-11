const topButton = document.querySelector(".to-top");
const THRESHOLD = 150;
const HIDDEN_CLASS = "to-top--hidden";

const updateVisibility = (element, isVisible) => {
  element.classList.toggle(HIDDEN_CLASS, !isVisible);
};

const isPastScrollThreshold = (threshold) => {
  return window.scrollY >= threshold;
};

const handleScroll = () => {
  updateVisibility(topButton, isPastScrollThreshold(THRESHOLD));
};

document.addEventListener("scroll", handleScroll);
