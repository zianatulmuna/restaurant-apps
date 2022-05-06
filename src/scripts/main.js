import data from '../DATA.json';

const main = () => {
  const postElement = document.querySelector('.posts');

  postElement.innerHTML = '';
  data.restaurants.forEach((restaurant) => {
    const {
      name, description, pictureId, city, rating,
    } = restaurant;
    const restaurantElement = document.createElement('article');
    restaurantElement.setAttribute('class', 'post-item');

    restaurantElement.innerHTML = `
    <img tabindex="0" class="post-item__thumbnail" src="${pictureId}" alt="Gambar Restaurant ${name}">
    <div class="post-item__content">
    <p tabindex="0" class="post-item__rating">Rating: ${rating}</p>
    <h1 class="post-item__title"><a href="#">${name}</a></h1>
    <p tabindex="0" class="post-item__city">Kota, ${city}</p>
    <p tabindex="0" class="post-item__description">${description}</p>
    </div>
`;

    postElement.appendChild(restaurantElement);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#menu');
    const hero = document.querySelector('.hero');
    const main = document.querySelector('main');
    const drawer = document.querySelector('#drawer');

    menu.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      event.stopPropagation();
    });

    hero.addEventListener('click', () => {
      drawer.classList.remove('open');
    });

    main.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
};

export default main;
