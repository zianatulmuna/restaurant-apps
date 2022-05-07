import CONFIG from '../../globals/config';
 
const createRestoItemTemplate = (resto) => `
    <div class="post-item">
        <div class="post-item__header">
            <img tabindex="0" class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Gambar Restaurant ${resto.name}">
            <div class="post-item__rating">
                <p tabindex="0">⭐️<span class="post-item__rating__score">${resto.rating}</span></p>
            </div>
        </div>
        <div class="post-item__content">            
            <p tabindex="0" class="post-item__city"><i class="fas fa-map-marker-alt"></i><span class="post-item__city__name">${resto.city}</span></p>
            <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
            <p tabindex="0" class="post-item__description">${resto.description}</p>
        </div>
    </div>
  `;
 
export { createRestoItemTemplate };