import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <style>
        .hero {
          display: none;
        }
        </style>
    <div class="content">
        <div class="content__item">
            <h1 tabindex="0" class="content__heading">Favorite Restaurants</h1>
            <div id="restaurants" class="restaurants"></div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
