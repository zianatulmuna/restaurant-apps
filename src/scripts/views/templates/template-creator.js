import CONFIG from '../../globals/config';
 
const createRestoItemTemplate = (resto) => `
<div class="resto-item">
<img tabindex="0" class="resto-item__picture" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
<div class="resto-item__header">
    <p tabindex="0" class="resto-item__city"><i class="fas fa-map-marker-alt"></i><span class="resto-item__city__name">${resto.city}</span></p>

    <div class="resto-item__rating">
    <p tabindex="0"><span class="resto-item__rating__star"><i class="fas fa-star"></i></span>${resto.rating}</p>
    </div>
</div>
<div class="resto-item__content">            
<h1 class="resto-item__title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h1>
<p tabindex="0" class="resto-item__description">${resto.description}</p>
</div>
</div>
  `;

  const createRestoDetailTemplate = (resto) => `
  <h1 class="resto__name">${resto.restaurant.name}</h1>
 
    <img class="resto__picture" src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="${resto.restaurant.title}">
 
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${resto.restaurant.address}</p>
    <h4>City</h4>
    <p>${resto.restaurant.city}</p>
    <h4>Rating</h4>
    <p><span class="resto-item__rating__star"><i class="fas fa-star"></i></span>${resto.restaurant.rating}</p>
  </div>
  <div class="resto__description">
    <h3>Description</h4>
    <p>${resto.restaurant.description}</p>  
  </div>
  <div class="resto__foods">
    <h3>Food Menus</h4>
    <p>${resto.restaurant.menus.foods
        .map(
        (foods) => `
            <li>${foods.name}</li>
            `,
        ).join('')}
    </p>
  </div>
  <div class="resto__drinks">
  <h3>Drink Menus</h4>
    <p>${resto.restaurant.menus.drinks
        .map(
        (drinks) => `
            <li>${drinks.name}</li>
            `,
        ).join('')}
    </p>
  </div>
  <div class="resto__reviews">
  <h3>Reviews</h4>
    <p>${resto.restaurant.customerReviews
        .map(
        (customerReviews) => `
            <section class="resto__reviews__column">
            <p class="review__name">${customerReviews.name}</p>
            <p class="review__text">${customerReviews.review}</p>
            <p class="review__date">${customerReviews.date}</p>
            </section>
            `,
        ).join('')}
    </p>
  </div>
  `;    
 
export { createRestoItemTemplate, createRestoDetailTemplate };