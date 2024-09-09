// Array contendo os objetos de imagem com id e url
const images = [
    { id: 1, url: "./images/chrono.jpg" },
    { id: 2, url: "./images/inuyasha.jpg" },
    { id: 3, url: "./images/ippo.png" },
    { id: 4, url: "./images/tenchi.jpg" },
    { id: 5, url: "./images/tenjhotenge.jpg" },
    { id: 6, url: "./images/yuyuhakusho.jpg" },
];

// Seleciona o contêiner que conterá os itens de imagem e os marcadores
const containerItems = document.querySelector(".container-items");
const containerMarkers = document.querySelector(".container-markers");

// Função para criar os marcadores (indicadores de posição)
const createMarkers = (id, isActive) => {
    // Define a classe CSS com base na condição de marcador ativo ou não
    const activeClass = isActive ? "marker marker-on" : "marker";
    
    // Adiciona o marcador ao container de marcadores usando o HTML dinâmico
    containerMarkers.insertAdjacentHTML(
        'beforeend',
        `<div class="${activeClass}" name='${id}_marker'></div>`
    );
};

// Função para carregar as imagens e seus respectivos marcadores
const loadImages = (images, container, marker) => {
    images.forEach((image, index) => {
        // Insere cada imagem no contêiner de itens
        container.insertAdjacentHTML(
            'beforeend',
            `<div class="item">
                <img src='${image.url}' id='${image.id}_img'>
            </div>`
        );
        // Cria um marcador para cada imagem, definindo o segundo como ativo inicialmente
        createMarkers(image.id, index === 0);
    });
};

// Chama a função loadImages para carregar as imagens e marcadores na tela
loadImages(images, containerItems, containerMarkers);

// Seleciona todos os itens e marcadores após o carregamento
let items = document.querySelectorAll(".item");
let markers = document.querySelectorAll(".marker");

// Variável para rastrear o índice atual da imagem visível
let currentIndex = 1;

// Função para atualizar os marcadores com base no índice atual
const updateMarkers = (newIndex) => {
    // Remove a classe ativa de todos os marcadores
    markers.forEach(marker => marker.classList.remove("marker-on"));
    
    // Adiciona a classe ativa ao marcador correspondente ao índice atual
    markers[newIndex - 1].classList.add("marker-on");
};

// Função para avançar para a próxima imagem no carrossel
const next = () => {
    // Move o primeiro item para o final do contêiner
    containerItems.appendChild(items[0]);
    
    // Reatualiza a lista de itens após a mudança
    items = document.querySelectorAll(".item");
    
    // Atualiza o índice atual, clicando de volta ao início, se necessário
    currentIndex = (currentIndex % items.length) + 1;
    
    // Atualiza os marcadores de acordo com o novo índice
    updateMarkers(currentIndex);
};

// Função para retroceder para a imagem anterior no carrossel
const previous = () => {
    // Move o último item para o início do contêiner
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    
    // Reatualiza a lista de itens após a mudança
    items = document.querySelectorAll(".item");
    
    // Atualiza o índice atual, ciclando para o final, se necessário
    currentIndex = currentIndex === 1 ? items.length : currentIndex - 1;
    
    // Atualiza os marcadores de acordo com o novo índice
    updateMarkers(currentIndex);
};

// Adiciona ouvintes de eventos aos botões de navegação "Anterior" e "Próximo"
document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);

// Define um intervalo para mudar automaticamente para a próxima imagem a cada 10 segundos
setInterval(next, 10000);
