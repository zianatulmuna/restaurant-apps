import FavoriteRestaurantSearchPresenter
  from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView
  from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('resto a');

      expect(presenter.latestQuery)
        .toEqual('resto a');
    });

    it('should ask the model to search for restaurants', () => {
      searchRestaurants('resto a');

      expect(favoriteRestaurants.searchRestaurants)
        .toHaveBeenCalledWith('resto a');
    });

    it('should show the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.resto-item').length)
        .toEqual(1);

      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
      }, {
        id: 2,
        name: 'Dua',
      }]);
      expect(document.querySelectorAll('.resto-item').length)
        .toEqual(2);
    });

    it('should show the name of the found restaurants', () => {
      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
      }]);
      expect(document.querySelectorAll('.restaurant__name')
        .item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - when the restaurant returned does not contain a name', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantTitles = document.querySelectorAll('.restaurant__name');
        expect(restaurantTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurants('resto a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([]);

      searchRestaurants('resto a');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length)
          .toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('resto a')
        .and
        .returnValues([]);

      searchRestaurants('resto a');
    });
  });
});
