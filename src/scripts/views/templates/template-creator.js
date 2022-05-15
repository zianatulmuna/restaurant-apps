import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (resto) => `
<div class="resto-item">
<img tabindex="0" class="resto-item__picture lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name || '-'}">
<div class="resto-item__header">
    <p tabindex="0" class="resto-item__city"><i class="fas fa-map-marker-alt" aria-label="lokasi"></i><span class="resto-item__city__name">${resto.city || '-'}</span></p>

    <div class="resto-item__rating">
    <p tabindex="0"><span class="resto-item__icon" aria-label="bintang"><i class="fas fa-star"></i></span>${resto.rating || '-'}</p>
    </div>
</div>
<div class="resto-item__content">            
<h1 class="resto-item__name restaurant__name"><a href="${`/#/detail/${resto.id}`}">${resto.name || '-'}</a></h1>
<p tabindex="0" class="resto-item__description">${resto.description || '-'}</p>
</div>
</div>
  `;

const createRestaurantDetailTemplate = (resto) => `
  <h1 tabindex="0" class="resto__name">${resto.restaurant.name}</h1>
  <img tabindex="0" class="resto__picture lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="${resto.restaurant.name}">
  <div class="resto__info">
    <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${resto.restaurant.address}</p>
    <h4 tabindex="0">City</h4>
    <p tabindex="0">${resto.restaurant.city}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0"><span class="resto-item__icon" aria-label="bintang"><i class="fas fa-star"></i></span>${resto.restaurant.rating}</p>
  </div>
  <div class="resto__description">
    <h3 tabindex="0">Description</h4>
    <p tabindex="0">${resto.restaurant.description}</p>  
  </div>
  <div class="resto__foods">
    <h3 tabindex="0">Food Menus</h4>
    <p>${resto.restaurant.menus.foods
    .map(
      (foods) => `
            <li tabindex="0">${foods.name}</li>
            `,
    ).join('')}
    </p>
  </div>
  <div class="resto__drinks">
  <h3 tabindex="0">Drink Menus</h4>
    <p>${resto.restaurant.menus.drinks
    .map(
      (drinks) => `
            <li tabindex="0">${drinks.name}</li>
            `,
    ).join('')}
    </p>
  </div>
  <div class="resto__reviews">
  <h3 tabindex="0">Reviews</h4>
    <p>${resto.restaurant.customerReviews
    .map(
      (customerReview) => `
        <div class="resto__reviews__column">
          <p tabindex="0" class="review__name"><span class="resto-item__icon"><i class="fas fa-user"></i></span>${customerReview.name}</p>
          <p tabindex="0" class="review__text">${customerReview.review}</p>
          <p tabindex="0" class="review__date">${customerReview.date}</p>
        </div>
      `,
    ).join('')}
    </p>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeButtonTemplate,
};
