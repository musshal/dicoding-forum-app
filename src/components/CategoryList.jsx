import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoryList({ categories, onClickCategory, params }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          category={category}
          onClickCategory={onClickCategory}
          params={params}
        />
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
};

CategoryList.defaultProps = {
  onClickCategory: undefined,
  params: undefined,
};

export default CategoryList;
