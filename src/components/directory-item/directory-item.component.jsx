import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, subtitle } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title.toUpperCase()}</h2>
        <p>{subtitle.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
