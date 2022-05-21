import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

let mobileMenu = new MobileMenu()

if(module.hot) {
    module.hot.accept()
}

/* Section for functionality of the page */

const d = new Date()
document.getElementById("year").innerHTML = d.getFullYear()


