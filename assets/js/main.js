/* ======= BACK TO TOP SCRIPT =======  */

const mybutton = document.getElementById("envol-btt");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    mybutton.classList.add('customshow')
  } else {
    mybutton.classList.remove('customshow')
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
