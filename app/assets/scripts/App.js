import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
//import Modal from './modules/Modal'


/* section for webpack */
if(module.hot) {
    module.hot.accept()
}

/* Section for functionality of the page */
//new Modal()
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let mobileMenu = new MobileMenu()
let modal




const d = new Date()
document.getElementById("year").innerHTML = d.getFullYear()


