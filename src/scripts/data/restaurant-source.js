import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDicodingSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestaurantDicodingSource;
