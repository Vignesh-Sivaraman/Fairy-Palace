import "./category-item.styles.scss";

const CatergoryItem = ({ category }) => {
  const { title, imageUrl, subtitle } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>{subtitle.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default CatergoryItem;
