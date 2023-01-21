const question = document.querySelectorAll("dt");

function answer() {
  this.classList.toggle("active"); 
  this.nextElementSibling.classList.toggle("active"); 
}

question.forEach((item) => {
  item.addEventListener("click", answer)
});