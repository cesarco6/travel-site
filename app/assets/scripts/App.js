import '../styles/styles.css'

if(module.hot) {
    module.hot.accept()
}

const d = new Date()
document.getElementById("year").innerHTML = d.getFullYear()

