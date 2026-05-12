const topButton = document.querySelector(".to-top");
const THRESHOLD = 150;
const HIDDEN_CLASS = "to-top--hidden";

const updateVisibility = (element: Element, isVisible: boolean) => {
  element.classList.toggle(HIDDEN_CLASS, !isVisible);
};

const isPastScrollThreshold = (threshold: number) => {
  return window.scrollY >= threshold;
};

const handleScroll = () => {
  updateVisibility(topButton, isPastScrollThreshold(THRESHOLD));
};

document.addEventListener("scroll", handleScroll);
