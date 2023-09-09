import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoryList({ categories }) {
  return (
    <div className="flex flex-wrap gap-3 w-fit">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          category={category}
        />
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoryList;
