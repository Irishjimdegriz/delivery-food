const cartButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

cartButton.addEventListener('click', toggleModal);//function (event) {
//  modal.classList.add("is-open");
//})
closeButton.addEventListener('click', toggleModal);
//closeButton.addEventListener('click', function (event) {
//  modal.classList.remove("is-open");
//})

function toggleModal(){
  modal.classList.toggle("is-open");
}

new WOW().init();