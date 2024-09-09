# Carrossel de Imagens com Navegação e Marcadores

Este projeto implementa um carrossel de imagens simples usando HTML, CSS e JavaScript. O carrossel permite que o usuário navegue manualmente pelas imagens usando botões "Anterior" e "Próximo", além de atualizar automaticamente os marcadores para refletir a imagem atual. Também há uma navegação automática que ocorre a cada 10 segundos.

## Demonstração

![Demonstração do Carrossel](./public/images/tela_slideshow.png)

## Funcionalidades

- Navegação manual entre as imagens usando botões.
- Atualização automática dos marcadores para indicar a imagem atual.
- Navegação automática para a próxima imagem a cada 10 segundos.
- Layout simples e fácil de personalizar.

## Como Usar

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Abra o arquivo `index.html` no seu navegador.

## Estrutura do Código

### HTML

O código HTML é simples e contém uma estrutura de contêineres para o carrossel de imagens e marcadores, além de botões de navegação.

```html
<div class="carousel">
    <div class="container-items">
        <!-- As imagens serão inseridas aqui via JavaScript -->
    </div>
    <div class="container-markers">
        <!-- Os marcadores serão inseridos aqui via JavaScript -->
    </div>
    <button id="previous">Anterior</button>
    <button id="next">Próximo</button>
</div>
```

### CSS

Certifique-se de adicionar estilos básicos no arquivo CSS para que o carrossel funcione corretamente, como a posição dos botões e marcadores.

### JavaScript

O código JavaScript é responsável por carregar as imagens, gerenciar a navegação, atualizar os marcadores, e configurar a navegação automática.

```javascript
const images = [
    { id: 1, url: "./images/chrono.jpg" },
    { id: 2, url: "./images/inuyasha.jpg" },
    { id: 3, url: "./images/ippo.png" },
    // Mais imagens aqui...
];

const containerItems = document.querySelector(".container-items");
const containerMarkers = document.querySelector(".container-markers");

// Funções de carregamento e navegação...

setInterval(next, 10000);
```

Para mais detalhes, veja o código completo [aqui](./codigo.js).

## Personalização

- **Adicionar mais imagens:** Basta adicionar mais objetos ao array `images`.
- **Alterar o intervalo de navegação automática:** Modifique o valor de `10000` (10 segundos) na função `setInterval`.
- **Estilização:** Personalize os estilos no arquivo CSS para mudar a aparência do carrossel.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.