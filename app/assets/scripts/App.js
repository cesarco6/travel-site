import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'
import React from 'react'
import ReactDOM from 'react-dom'

//React related code goes here
function AppComponent() {
    return(
        <div>
            <p>This is the intro to React</p>
        </div>
    )
}

ReactDOM.render(<AppComponent />, document.getElementById('app'))



/* section for webpack */
if(module.hot) {
    module.hot.accept()
}

/* Section for functionality of the page */
new Modal()
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let mobileMenu = new MobileMenu()




const d = new Date()
document.getElementById("year").innerHTML = d.getFullYear()


