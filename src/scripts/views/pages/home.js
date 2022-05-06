import RestaurantDicodingSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
      return `
        <div class="content">
            <div class="explore">
                <h1 tabindex="0" class="explore__label">Explore Restaurants</h1>
                <div id="posts" class="posts"></div>
            </div>
        </div>
      `;
    },
   
    async afterRender() {
        const restaurants = await RestaurantDicodingSource.listRestaurant();
        
        restaurants.forEach((resto) => {
            const restoContainer = document.querySelector('#posts');
            restoContainer.innerHTML += createRestoItemTemplate(resto);
        });
    },
  };
   
  export default Home;