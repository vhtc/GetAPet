import { nav } from "../jsHTML/nav.js";

export function navBar() {
    nav().innerHTML = sectionLogo() + sectionNavigation()
}

function sectionLogo() {
    let x = `<section id="sectionLogo">
            <a id="logoGetaPet">
                <i class="fa-solid fa-paw fa-2x"></i>
                <labelEscrita for="">Get A Pet</labelEscrita>
            </a>
    </section>`

    return x
}

function sectionNavigation() {
    let x = `<section id="sectionNavigation">
            <i class="fa-solid fa-bars"></i>
    </section>`

    return x
}