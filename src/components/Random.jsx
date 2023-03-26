import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, CarouselCard, Gradient } from "./divStyles";
import { Link, useParams } from "react-router-dom";

function Random() {
  const [random, setRandom] = useState([]);
  const params = useParams();

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const checkStorage = localStorage.getItem("random");

    if (checkStorage) {
      setRandom(JSON.parse(checkStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9`
      );
      const data = await api.json();
      localStorage.setItem("random", JSON.stringify(data.recipes));
      setRandom(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Random Cuisine Choices!</h3>
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          arrows: true,
          pagination: true,
          drag: "free",
          gap: "5rem",
        }}
      >
        {random.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <CarouselCard>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </CarouselCard>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

export default Random;
