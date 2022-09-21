const navMobile =document.querySelector('.nav-mobile')
const hamburgerBtn = document.querySelector(".hamburger")
const footerYear = document.querySelector(".footer__year")
const body = document.querySelector("body")


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText=year;
}
handleCurrentYear()

const showNav = () => {
   hamburgerBtn.classList.toggle("is-active")
   navMobile.classList.toggle('nav-mobile__active')
   disableScroll()

}



const disableScroll = () => {
    navMobile.classList.toggle("active");
    if(navMobile.classList.contains('active')){
        body.style.overflow = "hidden";
    } else{
        body.style.overflow = "auto"
    }
}



hamburgerBtn.addEventListener('click', showNav)
