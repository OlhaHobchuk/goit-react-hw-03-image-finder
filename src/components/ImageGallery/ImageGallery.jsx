import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem toggleModal={toggleModal} images={images} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
