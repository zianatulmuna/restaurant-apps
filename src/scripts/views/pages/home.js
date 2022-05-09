import RestaurantDicodingSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
      return `
        <div class="content">
            <div class="content__item">
                <h1 tabindex="0" class="content__heading">Explore Restaurants</h1>
                <div id="restaurants" class="restaurants"></div>
            </div>
        </div>
      `;
    },
   
    async afterRender() {
        const restaurants = await RestaurantDicodingSource.listRestaurant();
        
        restaurants.forEach((resto) => {
            const restoContainer = document.querySelector('#restaurants');
            restoContainer.innerHTML += createRestaurantItemTemplate(resto);
        });
    },
  };
   
  export default Home;