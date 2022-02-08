const Category = ({ category }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      {/* Liste des meals */}
      {category.meals.map((meal, index) => {
        return (
          <div className="menu-card">
            <h3>{meal.title}</h3>
            <p>{meal.description}</p>
            {meal.picture && (
              <img style={{ height: 100 }} src={meal.picture} alt="" />
            )}
            <span> {meal.price} €</span>
            {meal.popular && <span> ⭐️ Populaire</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
