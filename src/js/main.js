const navMobile =document.querySelector('.nav-mobile')
const hamburgerBtn = document.querySelector(".hamburger")
const footerYear = document.querySelector(".footer__year")


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText=year;
}
handleCurrentYear()

const showNav = () => {
   hamburgerBtn.classList.toggle("is-active")
   navMobile.classList.toggle('nav-mobile__active')
}

hamburgerBtn.addEventListener('click', showNav)