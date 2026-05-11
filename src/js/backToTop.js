const btn = document.querySelector(".to-top");

const changeVisibilityOnScroll = (element, amount = 150) => {
  const isNotStuck =
    document.body.scrollTop >= amount ||
    document.documentElement.scrollTop >= amount;
  element.classList.toggle("to-top--hidden", !isNotStuck);
};

window.onscroll = () => changeVisibilityOnScroll(btn);
