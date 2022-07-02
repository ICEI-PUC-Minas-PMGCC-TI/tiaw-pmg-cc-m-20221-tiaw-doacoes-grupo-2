function cadastraUser() {
    var inputNome = document.getElementById("inputNome");
    var inputUser = document.getElementById("inputUser");
    var inputTelefone = document.getElementById("inputTelefone");
    var inputEmail = document.getElementById("inputEmail");
    var inputIdade = document.getElementById("inputIdade");
    

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
        idade: inputIdade.value,
        
    }

    dados.push(auxCadastro);

    localStorage.setItem("dadosUsuario", JSON.stringify(dados));
    alert("Informações Salvas");
    document.getElementById('btnUpdate').disabled = true;
    document.location.reload();
}

function alteraUser() {
    var inputNome = document.getElementById("inputNome");
    var inputUser = document.getElementById("inputUser");
    var inputTelefone = document.getElementById("inputTelefone");
    var inputEmail = document.getElementById("inputEmail");
    var inputIdade = document.getElementById("inputIdade");
    

    document.getElementById('inputNome').disabled = false;
    document.getElementById("inputUser").disabled = false;
    document.getElementById('inputTelefone').disabled = false;
    document.getElementById('inputEmail').disabled = false;
    document.getElementById('inputIdade').disabled = false;
    
    document.getElementById('btnInsert').disabled = false;
    document.getElementById('btnUpdate').disabled = true;

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
        idade: inputIdade.value,
        
    }

    dados.push(auxCadastro);

    localStorage.setItem("dadosUsuario", JSON.stringify(dados));
}

window.onload = () => {
    if (localStorage.getItem('dadosUsuario')) {
        dados = JSON.parse(localStorage.getItem("dadosUsuario"));
        let posicao = dados.length - 1;
        document.getElementById('inputNome').defaultValue = dados[posicao].nome;
        document.getElementById('inputUser').defaultValue = dados[posicao].user;
        document.getElementById('inputTelefone').defaultValue = dados[posicao].telefone;
        document.getElementById('inputEmail').defaultValue = dados[posicao].email;
        document.getElementById('inputIdade').defaultValue = dados[posicao].idade;
       
        document.getElementById('btnUpdate').disabled = false;
        document.getElementById('btnInsert').disabled = true;
        document.getElementById('inputNome').disabled = true;
        document.getElementById('inputUser').disabled = true;
        document.getElementById('inputTelefone').disabled = true;
        document.getElementById('inputEmail').disabled = true;
        document.getElementById('inputIdade').disabled = true;
        
    } else {
        document.getElementById('btnUpdate').disabled = true;
        document.getElementById('btnInsert').disabled = false;
    }

    let inputNome = document.getElementById('inputNome');
    inputNome.onchange = () => console.log('change', inputNome.value);
    inputNome.onfocus = () => console.log('alteração iniciada');
    inputNome.onblur = () => {
        if (inputNome.value.length == 0) {
            instrucoes.innerHTML = 'Campo vazio';
            inputNome.style.border = 'thin red solid';
        } else {
            instrucoes.innerHTML = '';
            inputNome.style.border = '';
            inputNome.onblur = () => console.log('alteração concluída');
        }
    }

    let inputUser = document.getElementById('inputUser');
    inputUser.onchange = () => console.log('change', inputUser.value);
    inputUser.onfocus = () => console.log('alteração iniciada');
    inputUser.onblur = () => {
        if (inputUser.value.length == 0) {
            instrucoes.innerHTML = 'Campo vazio';
            inputUser.style.border = 'thin red solid';
        } else {
            instrucoes.innerHTML = '';
            inputUser.style.border = '';
            inputUser.onblur = () => console.log('alteração concluída');
        }
    }

    let inputTelefone = document.getElementById('inputTelefone');
    inputTelefone.onchange = () => console.log('change', inputTelefone.value);
    inputTelefone.onfocus = () => console.log('alteração iniciada');
    inputTelefone.onblur = () => {
        if (inputTelefone.value.length == 0) {
            instrucoes.innerHTML = 'Campo vazio';
            inputTelefone.style.border = 'thin red solid';
        } else {
            instrucoes.innerHTML = '';
            inputTelefone.style.border = '';
            inputTelefone.onblur = () => console.log('alteração concluída');
        }
    }

    let inputEmail = document.getElementById('inputEmail');
    inputEmail.onchange = () => console.log('change', inputEmail.value);
    inputEmail.onfocus = () => console.log('alteração iniciada');
    inputEmail.onblur = () => {
        if (inputEmail.value.length == 0) {
            instrucoes.innerHTML = 'Campo vazio';
            inputEmail.style.border = 'thin red solid';
        } else {
            instrucoes.innerHTML = '';
            inputEmail.style.border = '';
            inputEmail.onblur = () => console.log('alteração concluída');
        }
    }

    let inputIdade = document.getElementById('inputIdade');
    inputIdade.onchange = () => console.log('change', inputIdade.value);
    inputIdade.onfocus = () => console.log('alteração iniciada');
    inputIdade.onblur = () => {
        if (inputIdade.value.length == 0) {
            instrucoes.innerHTML = 'Campo vazio';
            inputIdade.style.border = 'thin red solid';
        } else {
            instrucoes.innerHTML = '';
            inputIdade.style.border = '';
            inputIdade.onblur = () => console.log('alteração concluída');
        }
    }
}

