import React from "react";
import './Directory.styles.scss'
import CategoryType from "../CategoryTypes/CategoryType.component";

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((categories) => (
        <CategoryType
          key={categories.id}
          title={categories.title}
          imageUrl={categories.imageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
