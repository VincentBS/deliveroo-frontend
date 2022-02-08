import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Category from "./components/Category";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://deliveroo-vbs.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <Banner restaurant={data.restaurant} />
      {/* Liste des catégories */}
      {data.categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Category key={index} category={category} />
          )
        );
      })}
    </div>
  );
};

export default App;
