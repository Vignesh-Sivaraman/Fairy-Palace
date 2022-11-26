import React from "react";
import "./directory.styles.scss";
import "../catergory-item/category-item.component";
import CatergoryItem from "../catergory-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CatergoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
