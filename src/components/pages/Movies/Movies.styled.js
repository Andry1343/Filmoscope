import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Button = styled.button`

  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;

  font-weight: 500;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  &:hover {
    background-color: orangered;
    color: white;
  }
  /* &:active {
    background-color: orangered;
    color: white;
  } */
  &:focus {
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
