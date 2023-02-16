import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Box = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.p`
  height: 30px;
  font-weight: 100;
  font-size: 10px;
  padding: 10px 10px 5px;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 240px) {
    /* For everything bigger than 240px */
    font-weight: 100;
    font-size: 10px;
  }

  @media only screen and (min-width: 320px) {
    /* For everything bigger than 320px */
    font-size: 15px;
    font-weight: 200;
  }
  @media only screen and (min-width: 481px) {
    /* For everything bigger than 481px */
    font-size: 15px;
    font-weight: 200;
  }
  @media only screen and (min-width: 769px) {
    /* For everything bigger than 769px */
    font-size: 15px;
    font-weight: 200;
  }
  @media only screen and (min-width: 1025px) {
    /* For everything bigger than 1025px */
    font-size: 15px;
    font-weight: 200;
  }
  @media only screen and (min-width: 1201px) {
    /* For everything bigger than 1201px */
    font-size: 20px;
    font-weight: 200;
  }
`;
export const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
