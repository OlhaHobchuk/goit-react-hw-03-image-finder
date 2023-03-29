import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, toggleModal }) => {
  return (
    <>
      {images &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <li key={id} className={css.imageGalleryItem}>
              <img
                className={css.imageGalleryItemImage}
                src={webformatURL}
                alt={tags}
                onClick={() => toggleModal(largeImageURL)}
              />
            </li>
          );
        })}
    </>
  );
};

ImageGalleryItem.prototype = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  toggleModal: PropTypes.func.isRequired,
};
