import FavoriteRestaurantSearchView
  from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter
  from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11, name: 'A', rating: 3, city: 'A', description: 'Sebuah resto A',
        },
        {
          id: 22, name: 'B', rating: 4, city: 'B', description: 'Sebuah resto B',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
