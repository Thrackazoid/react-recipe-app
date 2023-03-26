import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled.button`
  height: 3rem;
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    color: white;
  }
`;

const CarouselCard = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  border-collapse: seperate;

  img {
    border-radius: 2rem;
    border-collapse: seperate;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: hotpink;
    width: 100%;
    text-align: center;
    font-weight: 900;
    font-size: 1.3rem;
    height: 32%;
    justify-content: center;
    align-items: center;
  }
`;

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  postition: relative;
  align-items: center;

  .button--div {
    margin-top: 2rem;
  }

  .button--div > button {
    margin-bottom: 1rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h3 {
    width: 100%;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const FormStyle = styled.form`
  div {
    display: flex;
    justify-content: center;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 65%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(15%, -50%);
    color: white;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns:
  repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap 3rem;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
  gap: 1rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const SNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration-line: none;
  width: 6rem;
  height: 6rem;
  cursor: pointer;

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

const Wrapper = styled.div`
  margin: 3rem 0rem;

  h3 {
    line-height 7px;
  }
`;

export {
  Button,
  Card,
  CarouselCard,
  DetailWrapper,
  FormStyle,
  Gradient,
  Grid,
  List,
  Logo,
  Nav,
  SNavLink,
  Wrapper,
};
