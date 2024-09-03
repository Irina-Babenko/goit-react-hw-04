import PropTypes from 'prop-types';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick = () => {}, isLoading = false }) => {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default LoadMoreBtn;
