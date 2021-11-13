const navMenuIcon = document.querySelector(".nav-menu")
const navUl = document.querySelector("nav ul")
const navUlLi = document.querySelectorAll("nav ul li")
const closeMenuIcon  = document.querySelector(".close-nav-menu")



function showMenu(){
    navUl.classList.add("ul-inline")

    for(let i = 0; i < navUlLi.length; i++){
        navUlLi[i].classList.add("responsive-ul-li")
    }

    navMenuIcon.classList.add("display-none")
    closeMenuIcon.classList.add("close-menu-icon")
}
function hideMenu(){
    navUl.classList.remove("ul-inline")

    for(let i = 0; i < navUlLi.length; i++){
        navUlLi[i].classList.remove("responsive-ul-li")
    }

    navMenuIcon.classList.remove("display-none")
    closeMenuIcon.classList.remove("close-menu-icon")
}