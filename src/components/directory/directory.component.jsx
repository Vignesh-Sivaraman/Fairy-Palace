import React from "react";
import "./directory.styles.scss";
import "../directory-item/directory-item.component";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
