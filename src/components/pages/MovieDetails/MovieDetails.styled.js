import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: block;
`;

export const Box = styled.div`
  
  margin-bottom: 20px;


  @media only screen and (min-width: 240px) {
    /* For everything bigger than 240px */
    
  }

  @media only screen and (min-width: 320px) {
    /* For everything bigger than 320px */
    
  }
  @media only screen and (min-width: 481px) {
    /* For everything bigger than 481px */
    
  }
  @media only screen and (min-width: 769px) {
    /* For everything bigger than 769px */
    display: flex;
  }
  @media only screen and (min-width: 1025px) {
    /* For everything bigger than 1025px */
    display: flex;
  }
  @media only screen and (min-width: 1201px) {
    /* For everything bigger than 1201px */
    display: flex;
  }
`;
export const Image = styled.img`
  /* max-width: 350px; */
  margin-right: 40px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Year = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Description = styled.h2`
  margin-bottom: 10px;
  font-size: 25px;
`;
export const OverviewText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Genres = styled.p`
  font-size: 20px;
`;
export const MyLink = styled(NavLink)`
  padding: 5px 10px;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: black;
  transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const BackLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  font-weight: 200;
  color: black;
  transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

export const LinkWrapper = styled.div`
  padding: 20px 0;
  border-top: 3px solid;
  border-bottom: 1px solid black;
  border-image: 1px solid black;
`;

export const Additional = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
`;
