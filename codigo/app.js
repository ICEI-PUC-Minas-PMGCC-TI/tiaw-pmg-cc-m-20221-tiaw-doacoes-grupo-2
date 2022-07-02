// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            id: 1,
            nome: "Make A Wish",   
            site: "makeawish.org.br/",
            local: "internacional",
            categoria: "criancas e adolescentes",
            descricao: "Juntos, criamos sonhos que transformam a vida para crianças com doenças críticas.",
            
        },
        {
            "id": 2,
            "nome": "Fundação Abrinq",   
            "site": "fadc.org.br/",
            "local": "nacional",
            "categoria": "criancas e adolescentes",
            "descricao": "Você já pensou em um Brasil em que todas as crianças e adolescentes tenham os seus direitos garantidos?",
        },
        {
            "id": 3,
            "nome": "Instituto DARA",   
            "site": "dara.org.br/",
            "local": "nacional",
            "categoria": "social",
            "descricao": "O Instituto Dara (antigo Saúde Criança Renascer) é uma organização da sociedade civil que atua para promover a saúde e o desenvolvimento humano por meio da implementação e da disseminação de uma abordagem integrada de combate à pobreza.",
        },
        {
            "id": 4,
            "nome": "Criança Segura",   
            "site": "criancasegura.org.br/",
            "local": "nacional",
            "categoria": "criancas e adolescentes",
            "descricao": "Nós somos uma organização não governamental e sem fins lucrativos. A única, no Brasil, que atua para salvar crianças e adolescentes de todos os tipos de acidentes.",
        },
        {
            "id": 5,
            "nome": "Abrale",   
            "site": "abrale.org.br/",
            "local": "nacional",
            "categoria": "hospitalar",
            "descricao": "Oferecer ajuda e mobilizar parceiros para que todas as pessoas com câncer do sangue no Brasil tenham acesso ao melhor tratamento.",
        },
        {
            "id": 6,
            "nome": "Desiderata",   
            "site": "desiderata.org.br/",
            "local": "nacional",
            "categoria": "hospitalar",
            "descricao": "Soluções para a prevenção, diagnóstico e cuidado para a saúde de crianças e adolescentes. Para isso, promove ações de mobilização e articulação entre o setor público e a sociedade civil, capacitação de profissionais de saúde para o diagnóstico precoce, humanização do tratamento e produção e disseminação de conhecimento na área."
        },
        {
            "id": 7,
            "nome": "Cabelegria",   
            "site": "cabelegria.org/",
            "local": "nacional",
            "categoria": "hospitalar",
            "descricao": "Recebemos doações de cabelos, os transformamos em perucas e doamos para crianças e mulheres diagnosticadas com doenças que causam a queda dos cabelos! Conheça um pouco mais sobre nós!",
        },
        {
            "id": 8,
            "nome": "Amazônia Live",   
            "site": "amazonialive.com.br/",
            "local": "nacional",
            "categoria": "ambiental",
            "descricao": "O Rock in Rio levantou a voz e garantiu milhões de árvores para a maior floresta tropical do mundo.",
        },
        {
            "id": 9,
            "nome": "SOS Amazônia",   
            "site": "sosamazonia.org.br/",
            "local": "nacional",
            "categoria": "ambiental",
            "descricao": "Nós somos a SOS Amazônia, uma ONG com a missão de promover a conservação da biodiversidade e o crescimento da consciência ambiental na Amazônia.",
        },
        {
            "id": 10,
            "nome": "CEPAN",   
            "site": "cepan.org.br/",
            "local": "nacional",
            "categoria": "ambiental",
            "descricao": "Gerar e divulgar soluções estratégicas para a conservação da biodiversidade mediante ciência, formação de recursos humanos e diálogo com a sociedade.",
        },
        {
            "id": 11,
            "nome": "Action Aid",   
            "site": "actionaid.org.br/",
            "local": "internacional",
            "categoria": "social",
            "descricao": "Queremos um mundo sem pobreza e injustiça. Por isso, investimos na capacidade das pessoas de criar mudanças para si mesmas e suas comunidades.",
        },
        {
            "id": 12,
            "nome": "Greenpeace",   
            "site": "greenpeace.org/brasil/",
            "local": "internacional",
            "categoria": "ambiental",
            "descricao": "O Greenpeace é uma organização ambiental que existe porque o planeta e seus ecossistemas precisam de quem os defenda.",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = db_contatos_inicial


// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "site" : contato.site,
        "local" : contato.local,
        "categoria": contato.categoria,
        "descricao": contato.descricao
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].site = contato.site,
    db.data[index].local = contato.local,
    db.data[index].categoria = contato.categoria,
    db.data[index].descricao = contato.descricao

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}