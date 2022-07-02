const json = {
    cards: [
        {
            nome: 'Make A Wish',
            imagem: 'img/logo_makeawish_br.png',
            categoria: 'criancas e adolescentes',
            local: 'internacional',
            link: 'https://makeawish.org.br/',
            descricao: 'Juntos, criamos sonhos que transformam a vida para crianças com doenças críticas.',
            id : 1
        },
        {
            nome: 'Fundação Abrinq',
            imagem: 'img/logo-abrinq.png',
            categoria: 'criancas e adolescentes',
            local: 'nacional',
            link: 'https://www.fadc.org.br/',
            descricao: 'Você já pensou em um Brasil em que todas as crianças e adolescentes tenham os seus direitos garantidos?',
            id : 2
        },
        {
            nome: 'Instituto DARA',
            imagem: 'img/dara-logo.png',
            categoria: 'social',
            local: 'nacional',
            link: 'https://www.dara.org.br/',
            descricao: 'O Instituto Dara (antigo Saúde Criança Renascer) é uma organização da sociedade civil que atua para promover a saúde e o desenvolvimento humano por meio da implementação e da disseminação de uma abordagem integrada de combate à pobreza.',
            id : 3
        },
        {
            nome: 'Criança Segura',
            imagem: 'img/logo-criancasegura.png',
            categoria: 'criancas e adolescentes',
            local: 'nacional',
            link: 'https://criancasegura.org.br/',
            descricao: 'Nós somos uma organização não governamental e sem fins lucrativos. A única, no Brasil, que atua para salvar crianças e adolescentes de todos os tipos de acidentes.',
            id : 4
        },
        {
            nome: 'Abrale',
            imagem: 'img/logo-abrale.png',
            categoria: 'hospitalar',
            local: 'nacional',
            link: 'https://www.abrale.org.br/',
            descricao: 'Oferecer ajuda e mobilizar parceiros para que todas as pessoas com câncer do sangue no Brasil tenham acesso ao melhor tratamento.',
            id : 5
        },
        {
            nome: 'Desiderata',
            imagem: 'img/desiderata.png',
            categoria: 'hospitalar',
            local: 'nacional',
            link: 'https://desiderata.org.br/',
            descricao: 'Soluções para a prevenção, diagnóstico e cuidado para a saúde de crianças e adolescentes. Para isso, promove ações de mobilização e articulação entre o setor público e a sociedade civil, capacitação de profissionais de saúde para o diagnóstico precoce, humanização do tratamento e produção e disseminação de conhecimento na área.',
            id : 6
        },
        {
            nome: 'Cabelegria',
            imagem: 'img/logo-cabelegria.png',
            categoria: 'hospitalar',
            local: 'nacional',
            link: 'https://www.cabelegria.org/',
            descricao: 'Recebemos doações de cabelos, os transformamos em perucas e doamos para crianças e mulheres diagnosticadas com doenças que causam a queda dos cabelos! Conheça um pouco mais sobre nós!',
            id : 7
        },
        {
            nome: 'Amazônia Live',
            imagem: 'img/amazonia-live.png',
            categoria: 'ambiental',
            local: 'nacional',
            link: 'https://www.amazonialive.com.br/',
            descricao: 'O Rock in Rio levantou a voz e garantiu milhões de árvores para a maior floresta tropical do mundo.',
            id : 8
        },
        {
            nome: 'SOS Amazônia',
            imagem: 'img/sos-amazonia.png',
            categoria: 'ambiental',
            local: 'nacional',
            link: 'https://sosamazonia.org.br/',
            descricao: 'Nós somos a SOS Amazônia, uma ONG com a missão de promover a conservação da biodiversidade e o crescimento da consciência ambiental na Amazônia.',
            id : 9
        },
        {
            nome: 'CEPAN',
            imagem: 'img/cepan.png',
            categoria: 'ambiental',
            local: 'nacional',
            link: 'https://cepan.org.br/',
            descricao: 'Gerar e divulgar soluções estratégicas para a conservação da biodiversidade mediante ciência, formação de recursos humanos e diálogo com a sociedade.',
            id : 10
        },
        {
            nome: 'Action Aid',
            imagem: 'img/actionaid.png',
            categoria: 'social',
            local: 'internacional',
            link: 'https://actionaid.org.br/',
            descricao: 'Queremos um mundo sem pobreza e injustiça. Por isso, investimos na capacidade das pessoas de criar mudanças para si mesmas e suas comunidades.',
            id : 11
        },
        {
            nome: 'Greenpeace',
            imagem: 'img/Greenpeace.png',
            categoria: 'ambiental',
            local: 'internacional',
            link: 'https://www.greenpeace.org/brasil/',
            descricao: 'O Greenpeace é uma organização ambiental que existe porque o planeta e seus ecossistemas precisam de quem os defenda.',
            id : 12
        },
    ]
}

let rowDivFoto = document.createElement('div');
let rowDivInfo = document.createElement('div');
rowDivFoto.className = 'col-12 col-lg-6';
rowDivInfo.className = 'col-12 col-lg-6';
rowDivFoto.style.paddingLeft = "50px";
rowDivInfo.style.paddingRight = "50px";
const urlParams = new URLSearchParams(window.location.search);
const idPage = parseInt(urlParams.get('id'));
console.log(idPage);
let causa = json.cards.find(card => card.id === idPage);
rowDivFoto.innerHTML = `<a href="${causa.link}"> <img src="${causa.imagem}" height="450px" width="520px"></a>`;
rowDivInfo.innerHTML = `<h3>Nome: ${causa.nome}</h3>
<h3>Categoria: ${causa.categoria}</h3>
<h3>Quem Somos:</h3><h2>${causa.descricao}</h2>`;
document.getElementById('info').append(rowDivFoto);
document.getElementById('info').append(rowDivInfo);