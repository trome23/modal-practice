const closeModalBtn = document.querySelector("#close-modal")
const openModalBtn = document.querySelector("#open-modal")
const overLay = document.querySelector("#overlay") 

openModalBtn.addEventListener("click", function() {
    overLay.style.display = "block";
})

closeModalBtn.addEventListener("click", function() {
    overLay.style.display = "none";
})
