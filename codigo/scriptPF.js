function alteraUser() {
    toggleForm();

}

function saveUser() {
    let inputNome = document.getElementById("inputNome").value;
    let inputUser = document.getElementById("inputUser").value;
    let inputTelefone = document.getElementById("inputTelefone").value;
    let inputEmail = document.getElementById("inputEmail").value;
    let inputIdade = document.getElementById("inputIdade").value;

    let dadosUsuarioString = localStorage.getItem("dadosUsuario");
    let dados = JSON.parse(dadosUsuarioString);
    let indexOf = dados.map(dado => dado.user).indexOf(inputUser);
    let loggedUserString = localStorage.getItem("loggedUser");
    let check = validateUpdate(inputUser);

    if (check === null) {
        if (loggedUserString === inputUser) {
            dados[indexOf] = {
                nome: inputNome,
                user: inputUser,
                telefone: inputTelefone,
                email: inputEmail,
                idade: inputIdade,
                senha: dados[indexOf].senha
            }
            localStorage.setItem("dadosUsuario", JSON.stringify(dados));
            alert("Usuário atualizado!");
            toggleForm();
        } else if (indexOf === -1) {
            indexOf = dados.map(dado => dado.user).indexOf(loggedUserString);
            dados[indexOf] = {
                nome: inputNome,
                user: inputUser,
                telefone: inputTelefone,
                email: inputEmail,
                idade: inputIdade,
                senha: dados[indexOf].senha
    
            }
            localStorage.setItem("loggedUser", inputUser);
            localStorage.setItem("dadosUsuario", JSON.stringify(dados));
            alert("Usuário atualizado!");
            toggleForm();
        } else {
            alert("Nome de usuário já existe!");
        }
    } else {
        alert(check);
    }
}

function validateUpdate(user) {
    if (!user) {
        return "Usuário obrigatório.";
    }
    return null;
}

function toggleForm() {
    document.getElementById('inputNome').disabled = !document.getElementById('inputNome').disabled;
    document.getElementById("inputUser").disabled = !document.getElementById("inputUser").disabled;
    document.getElementById('inputTelefone').disabled = !document.getElementById('inputTelefone').disabled;
    document.getElementById('inputEmail').disabled = !document.getElementById('inputEmail').disabled;
    document.getElementById('inputIdade').disabled = !document.getElementById('inputIdade').disabled;

    document.getElementById('btnInsert').disabled = !document.getElementById('btnInsert').disabled;
    document.getElementById('btnUpdate').disabled = !document.getElementById('btnUpdate').disabled;
}

window.onload = () => {
    let loggedUserString = localStorage.getItem("loggedUser");
    let dadosUsuarioString = localStorage.getItem("dadosUsuario");
    if (loggedUserString && dadosUsuarioString) {
        let dados = JSON.parse(dadosUsuarioString);

        let indexOf = dados.map(dado => dado.user).indexOf(loggedUserString);

        let loggedUser = dados[indexOf];
        console.log(loggedUserString);
        document.getElementById('inputNome').defaultValue = loggedUser.nome;
        document.getElementById('inputUser').defaultValue = loggedUser.user;
        document.getElementById('inputTelefone').defaultValue = loggedUser.telefone;
        document.getElementById('inputEmail').defaultValue = loggedUser.email;
        document.getElementById('inputIdade').defaultValue = loggedUser.idade;

        document.getElementById('btnUpdate').disabled = false;
        document.getElementById('btnInsert').disabled = true;
        document.getElementById('inputNome').disabled = true;
        document.getElementById('inputUser').disabled = true;
        document.getElementById('inputTelefone').disabled = true;
        document.getElementById('inputEmail').disabled = true;
        document.getElementById('inputIdade').disabled = true;

    } else {
        document.getElementById('btnUpdate').disabled = true;
        document.getElementById('btnInsert').disabled = true;
    }

    let inputNome = document.getElementById('inputNome');

    inputNome.onblur = () => {
        if (inputNome.value.length == 0) {

            inputNome.style.border = 'thin red solid';
        } else {
            inputNome.style.border = '';
        }
    }

    let inputUser = document.getElementById('inputUser');

    inputUser.onblur = () => {
        if (inputUser.value.length == 0) {

            inputUser.style.border = 'thin red solid';
        } else {
            inputUser.style.border = '';
        }
    }

    let inputTelefone = document.getElementById('inputTelefone');
    inputTelefone.onblur = () => {
        if (inputTelefone.value.length == 0) {

            inputTelefone.style.border = 'thin red solid';
        } else {
            inputTelefone.style.border = '';
        }
    }

    let inputEmail = document.getElementById('inputEmail');
    inputEmail.onblur = () => {
        if (inputEmail.value.length == 0) {

            inputEmail.style.border = 'thin red solid';
        } else {
            inputEmail.style.border = '';
        }
    }

    let inputIdade = document.getElementById('inputIdade');
    inputIdade.onblur = () => {
        if (inputIdade.value.length == 0) {

            inputIdade.style.border = 'thin red solid';
        } else {
            inputIdade.style.border = '';
        }
    }
}

