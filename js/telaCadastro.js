import { main } from "../jsHTML/main.js"

export function telaCadastro() {
    main().innerHTML = sectionTela()
}

function sectionTela() {
    let x = `
    <section class='telaLoginCadastro'>
        <h1>Cadastrar</h1>  
        <p>Digite os seus dados de acesso no campo abaixo</p> 
        <h5>Nickname</h5> 
        <input type ='text'></input>
        <h5>E-mail</h5> 
        <input type ='email'></input>
        <h5>Confirmar E-mail</h5> 
        <input type ='email'></input>
        <h5>Senha</h5>
        <input type='password'></input>
        <h5>Confirmar Senha</h5>
        <input type='password'></input>
        <p>
            <button class='verde'>Cadastrar</button>
            <button class='azul' onclick='iniciarLogin()'>Fazer Login</button>
        </p>
    
    </section>`
    
    return x
}
