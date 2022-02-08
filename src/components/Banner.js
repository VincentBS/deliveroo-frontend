const Banner = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <div className="restaurant-picture">
        <img src={restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default Banner;
