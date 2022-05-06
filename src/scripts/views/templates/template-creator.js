import CONFIG from '../../globals/config';
 
const createRestoItemTemplate = (resto) => `
    <div class="post-item">
        <img tabindex="0" class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Gambar Restaurant ${resto.name}">
        <div class="post-item__content">
            <p tabindex="0" class="post-item__rating">Rating: ${resto.rating}</p>
            <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
            <p tabindex="0" class="post-item__city">Kota, ${resto.city}</p>
            <p tabindex="0" class="post-item__description">${resto.description}</p>
        </div>
    </div>
  `;
 
export { createRestoItemTemplate };