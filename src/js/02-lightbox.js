import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.js-gallery')
const markupGallery = createGallaryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markupGallery);

galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGallaryMarkup(galleryItems) {
    return galleryItems.
    map(({ preview, original, description }) => {
      return `
          <a class="gallery__item" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
      `;
    })
    .join('');
  }

function onGalleryContainerClick(e) {
  e.preventDefault();
  
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  new SimpleLightbox('.js-gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
