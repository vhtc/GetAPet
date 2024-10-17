import { main } from "../jsHTML/main.js"

export function telaLogin() {
    main().innerHTML = sectionTela()
}

function sectionTela() {
    let x = `
    <section class='telaLoginCadastro'>
        <h1>Login</h1>  
        <p>Digite os seus dados de acesso no campo abaixo</p> 
        <h5>E-mail</h5> 
        <input type ='email'></input>
        <h5>Senha</h5>
        <input type='password'></input>
        <p>
            <a href='#CadastrarSenha'>Esqueci minha senha</a>
        </p>
        <p>
            <button class='verde'>Entrar</button>
            <button class='azul' onclick="iniciarCadastro()">Cadastrar-se</button>
        </p>
    
    </section>`

    return x
}
