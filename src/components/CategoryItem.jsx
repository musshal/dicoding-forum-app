import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ category }) {
  return (
    <button
      type="button"
      className="border-2 border-gray-600 text-gray-600 w-fit rounded-md px-2"
    >
      <p>{category}</p>
    </button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryItem;
