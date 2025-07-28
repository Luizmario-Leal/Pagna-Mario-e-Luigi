const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueinobotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.display = "block"
}
function cliqueinamascara(){
    mascara.style.display = "none"
    form.style.left = "-300px"
    form.style.top = "30%"
}
function cliqueinofaleconosco(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.display = "block"
}