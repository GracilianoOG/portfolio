const btn = document.querySelector(".to-top");

const handleScroll = (element, amount = 150) => {
  const isNotStuck = window.scrollY >= amount;
  element.classList.toggle("to-top--hidden", !isNotStuck);
};

window.onscroll = () => handleScroll(btn);
