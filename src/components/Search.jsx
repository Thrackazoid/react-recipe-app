import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FormStyle } from "./divStyles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search..."
          value={input}
        />
      </div>
    </FormStyle>
  );
}

export default Search;
