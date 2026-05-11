const btn = document.querySelector(".to-top");

const updateVisibility = (element, isVisible) => {
  element.classList.toggle("to-top--hidden", !isVisible);
};

const handleScroll = (element, amount = 150) => {
  const isNotStuck = window.scrollY >= amount;
  updateVisibility(btn, isNotStuck);
};

window.onscroll = () => handleScroll(btn);
