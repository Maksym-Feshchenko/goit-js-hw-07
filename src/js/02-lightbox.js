import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.js-gallery')
const markupGallery = createGallaryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', markupGallery);

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

  new SimpleLightbox('.js-gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

