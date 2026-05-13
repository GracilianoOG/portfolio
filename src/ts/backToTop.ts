const topButton = document.querySelector<HTMLButtonElement>(".to-top")!;
const THRESHOLD: number = 150;
const HIDDEN_CLASS: string = "to-top--hidden";

const updateVisibility = (element: HTMLElement, isVisible: boolean) => {
  element.classList.toggle(HIDDEN_CLASS, !isVisible);
};

const isPastScrollThreshold = (threshold: number) => {
  return window.scrollY >= threshold;
};

const handleScroll = () => {
  updateVisibility(topButton, isPastScrollThreshold(THRESHOLD));
};

document.addEventListener("scroll", handleScroll);
