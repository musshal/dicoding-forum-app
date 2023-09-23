import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ category, onClickCategory, params }) {
  return (
    <button
      type="button"
      className={`${
        params === category ? 'bg-black text-white' : 'text-gray-600'
      } border-2 border-gray-500  rounded-lg px-2 w-fit`}
      onClick={() => onClickCategory(category)}
    >
      <p>
        #
        {category}
      </p>
    </button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
};

CategoryItem.defaultProps = {
  onClickCategory: undefined,
  params: undefined,
};

export default CategoryItem;
