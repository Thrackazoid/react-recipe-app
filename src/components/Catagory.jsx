import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiWhiteBook } from "react-icons/gi";
import styled from "styled-components";
import { List, SNavLink } from "./divStyles";
import { NavLink } from "react-router-dom";

function Catagory() {
  return (
    <List>
      <SNavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SNavLink>
      <SNavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SNavLink>
      <SNavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SNavLink>
      <SNavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SNavLink>
    </List>
  );
}

export default Catagory;
