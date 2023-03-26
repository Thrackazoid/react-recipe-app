import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DetailWrapper } from "../components/divStyles";
import { Button } from "../components/divStyles";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    const dataDetails = await data.json();

    setDetails(dataDetails);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      <div className="button--div">
        <Button
          onClick={() => setActiveTab("instructions")}
          className={activeTab === "instructions" ? "active" : ""}
        >
          Instructions
        </Button>
        <Button
          onClick={() => setActiveTab("ingredients")}
          className={activeTab === "ingredients" ? "active" : ""}
        >
          Ingredients
        </Button>
      </div>
      {activeTab === "instructions" && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
      )}
      {activeTab === "ingredients" && (
        <ul>
          {details.extendedIngredients?.map((ingredient) => {
            return <li key={ingredient.id}>{ingredient.original}</li>;
          })}
        </ul>
      )}
    </DetailWrapper>
  );
}

export default Recipe;
