import UrlParser from '../../routes/url-parser';
import RestaurantDicodingSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <style>
        .hero {
          display: none;
        }
        </style>
        <div class="content">
            <div class="content__item">
                <div id="restaurant" class="restaurant"></div>
            </div>
            <div id="likeButtonContainer"></div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDicodingSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        pictureId: resto.restaurant.pictureId,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
        description: resto.restaurant.description,
      },
    });
  },
};

export default Detail;
