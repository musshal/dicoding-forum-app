import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ category }) {
  return (
    <div className="border-2 border-gray-600 text-gray-600 w-fit rounded-md px-2">
      <p>{category}</p>
    </div>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryItem;
