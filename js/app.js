import { telaLogin } from "./telaLogin.js";
import { navBar } from "./navBar.js"

window.iniciar = iniciar
function iniciar() {
    iniciarNav()
    iniciarLogin()
}

window.iniciarLogin = iniciarLogin
function iniciarLogin() {
    telaLogin()
}

window.iniciarNav = iniciarNav
function iniciarNav(){
    navBar()
}