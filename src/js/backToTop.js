const btn = document.querySelector(".to-top");

const changeVisibilityOnScroll = () => {
  const amount = 150;
  const isNotStuck =
    document.body.scrollTop >= amount ||
    document.documentElement.scrollTop >= amount;
  btn.classList.toggle("to-top--hidden", !isNotStuck);
};

window.onscroll = changeVisibilityOnScroll;
