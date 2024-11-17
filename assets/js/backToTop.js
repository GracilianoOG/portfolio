const btn = document.querySelector(".to-top");
const amount = 150;

window.onscroll = () => {
  if(document.body.scrollTop >= amount || document.documentElement.scrollTop >= amount) {
    btn.classList.remove("to-top--hidden");
  } else {
    btn.classList.add("to-top--hidden");
  }
}