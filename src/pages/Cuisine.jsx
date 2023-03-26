import styled from "styled-components";
import { Grid, Card } from "../components/divStyles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type)
      .then((data) => console.log("resolved", data.status))
      .catch((error) => console.log("rejected", error.message));
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((recipe) => {
        return (
          <Card key={recipe?.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe?.image} alt={recipe?.title} />
              <h4>{recipe?.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
