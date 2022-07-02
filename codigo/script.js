let form = document.getElementById("form-contato");
var senha = document.getElementById("inputSenha");
var senha1 = document.getElementById("inputSenha1");
var login = document.getElementById("username");
var loginPass = document.getElementById("password");
var status = "Ativo";

function cadastraUser() {
    if (senha.value == senha1.value) {
        var inputNome = document.getElementById("inputNome");
        var inputUser = document.getElementById("inputUser");
        var inputTelefone = document.getElementById("inputTelefone");
        var inputEmail = document.getElementById("inputEmail");

        var inputSenha = document.getElementById("inputSenha");


        var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

        if (dados === null) {
            localStorage.setItem("dadosUsuario", "[]");
            dados = [];
        }

        var auxCadastro = {
            nome: inputNome.value,
            user: inputUser.value,
            telefone: inputTelefone.value,
            email: inputEmail.value,
            senha: btoa(inputSenha.value)

        }
        let check = validateRegistration(auxCadastro);
        if (check === null) {
            let userNames = dados.map(dado => dado.user);
            if (userNames.indexOf(inputUser.value) === -1) {
                dados.push(auxCadastro);
                localStorage.setItem("dadosUsuario", JSON.stringify(dados));
                alert("Informações Salvas");
                form.reset();
            } else {
                alert("Usuário já existe!");
            }
        }
        else {
            alert(check);
        }







    } else {
        alert("Senhas não coincidem!");
    }

}
function validateRegistration(user) {
    if (!user.user) {
        return "Usuário obrigatório.";
    }
    if (!user.senha) {
        return "Senha obrigatória.";
    }
    return null;
}
function enter() {
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (localStorage.getItem("dadosUsuario") != null) {
        let dados = JSON.parse(localStorage.getItem("dadosUsuario"));
        dados.forEach((user) => {
            if (user.user === userName && user.senha === btoa(password)) {
                localStorage.setItem("loggedUser", user.user);
                window.location.href = "index.html";
            }
        })
        if (localStorage.getItem("loggedUser") === null) {
            alert("Usuário ou senha incorretos!");
            window.location.href = "login.html";
        }
    } else {
        alert("Não existem usuários salvos!");
        window.location.href = "login.html";
    }

}

