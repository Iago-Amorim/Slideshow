const images = [
    { id: 1, url: "./images/chrono.jpg" },
    { id: 2, url: "./images/inuyasha.jpg" },
    { id: 3, url: "./images/ippo.png" },
    { id: 4, url: "./images/tenchi.jpg" },
    { id: 5, url: "./images/tenjhotenge.jpg" },
    { id: 6, url: "./images/yuyuhakusho.jpg" },
];

const containerItems = document.querySelector(".container-items");

const loadImages = (images, container) => {
    images.forEach((image) => {
        container.innerHTML += `
        <div class="item">
            <img src='${image.url}' id='${image.id}'>
        </div>
        `;
    });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
};

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);
