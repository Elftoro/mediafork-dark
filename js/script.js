const burgerButton = document.querySelector(".nav .nav-burger")
const menu = document.querySelector('.nav-list')

burgerButton.addEventListener("click", function() {
    menu.classList.toggle("active");
})


