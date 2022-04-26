import restaurants from '../data/DATA.js';

const main = () => {

    const postElement = document.querySelector(".posts");

    const renderRestaurants = () => {
        postElement.innerHTML = "";
        restaurants.forEach(restaurant => {
            const {name, description, pictureId, city, rating} = restaurant;
            const restaurantElement = document.createElement("article");
            restaurantElement.setAttribute("class", "post-item");

            restaurantElement.innerHTML = `
                <img class="post-item__thumbnail" src="${pictureId}" alt="Gambar Restaurant ${name}">
                <div class="post-item__content">
                        <p class="post-item__date">Rating: ${rating}</p>
                        <h1 class="post-item__title"><a href="#">${name}</a></h1>
                        <p class="post-item__description">${description}</p>
                    </div>
            `;

            postElement.appendChild(restaurantElement);
        })
    };

    document.addEventListener('DOMContentLoaded', () => renderRestaurants());
};

export default main;