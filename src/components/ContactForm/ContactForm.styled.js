import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 24px;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 20px 0;
`;
export const Label = styled.label`
  color: grey;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 4px;
  width: 400px;
  padding: 12px;
  margin-bottom: 16px;
`;
export const ButtonSubmit = styled.button`
 padding: 12px;
  border: none;
  cursor: pointer;
  min-width: 92px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  background-color: grey;
  color: rgb(63, 63, 65);
  box-shadow: -3px -3px 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgb(82, 81, 81);
    color: rgb(245, 235, 142);
`;
