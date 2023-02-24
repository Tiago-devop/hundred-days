import { useEffect, useState } from "react";
import {
  Button,
  CardMeal,
  FoodPresentationWrapper,
  ImgWrapper,
  IngredientWrapper,
} from "./App.styles";
import fetchData from "./fetchData";

interface Meal {
  meals: Array<{
    [key: string]: string;
  }>;
}

function App() {
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
  const [data, setData] = useState<Meal>({ meals: [] });
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { meals } = data;

  console.log(meals);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    async function getData() {
      const response = await fetchData(URL);
      setData(response);
    }
    if (meals.length === 0) {
      getData();
    }
  }, []);

  if (meals.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Let's do some meals</h1>
      {meals.map((item) => {
        return (
          <CardMeal isExpanded={isExpanded} key={item.idMeal}>
            <FoodPresentationWrapper>
              <h3>{item.strMeal}</h3>
              <ImgWrapper>
                <img src={item.strMealThumb} alt={item.strMeal} />
              </ImgWrapper>
            </FoodPresentationWrapper>
            <IngredientWrapper>
              <p>
                <b>Category: </b>
                {item.strCategory}
              </p>
              <p>
                <b>Area: </b>
                {item.strArea}
              </p>
              <p>
                <b>Tags: </b>
                {item.strTags ? item.strTags : "None"}
              </p>
              <Button onClick={() => handleClick()}>Recipe</Button>
            </IngredientWrapper>
          </CardMeal>
        );
      })}
    </>
  );
}

export default App;
