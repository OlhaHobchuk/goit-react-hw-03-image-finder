import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ text, onLoadMore }) => {
  return (
    <div className={css.buttonContainer}>
      <button type="button" className={css.loadMoreButton} onClick={onLoadMore}>
        {text}
      </button>
    </div>
  );
};

Button.prototype = {
  text: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
