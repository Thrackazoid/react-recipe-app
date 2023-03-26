import Pages from "./pages/Pages";
import Catagory from "./components/Catagory";
import Search from "./components/Search";
import styled from "styled-components";
import { Nav, Logo } from "./components/divStyles";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Delicious!</Logo>
      </Nav>
      <Search />
      <Catagory />
      <Pages />
    </div>
  );
}

export default App;
