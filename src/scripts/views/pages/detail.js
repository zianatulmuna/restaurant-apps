import UrlParser from '../../routes/url-parser';
import RestaurantDicodingSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

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
        </div>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const resto = await RestaurantDicodingSource.detailRestaurant(url.id);
      const restoContainer = document.querySelector('#restaurant');
      restoContainer.innerHTML = createRestoDetailTemplate(resto);
    },
  };
   
  export default Detail;