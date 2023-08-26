import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryList() {
  return (
    <div className="flex gap-3">
      <CategoryItem />
      <CategoryItem />
    </div>
  );
}

export default CategoryList;
