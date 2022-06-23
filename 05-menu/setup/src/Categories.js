import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            class='filter-btn'
            onClick={() => filterItems(category)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
