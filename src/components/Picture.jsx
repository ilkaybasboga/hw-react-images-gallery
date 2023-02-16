const Picture = ({ name, image }) => {
  return (
    <div className="picture">
      <img className="img" src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Picture;
