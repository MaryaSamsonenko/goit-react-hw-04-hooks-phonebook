import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Description = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  color: rgb(63, 63, 65);
`;

export const Button = styled.button`
 padding: 8px;
  border: none;
  cursor: pointer;
  min-width: 60px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  background-color: grey;
  color: rgb(63, 63, 65);
  box-shadow: -3px -3px 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgb(82, 81, 81);
    color: rgb(245, 235, 142);
`;
