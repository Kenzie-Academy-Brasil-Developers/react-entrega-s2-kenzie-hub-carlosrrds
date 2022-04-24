import styled from "styled-components";

export const Container = styled.button`
  height: 48px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  margin-top: 23px;
  color: var(--White);
  width: ${(props) => props.width};
  background-color: ${(props) =>
    props.disableButton
      ? "#59323F"
      : props.submitButton
      ? "#FF577F"
      : "#868E96"};
  border: 1.2182px solid
    ${(props) =>
      props.disableButton
        ? "#59323F"
        : props.submitButton
        ? "#FF577F"
        : "#868E96"};
  box-sizing: border-box;
  border-radius: 4.06066px;

  :hover {
    background-color: ${(props) =>
      props.disableButton
        ? "#59323F"
        : props.submitButton
        ? "#FF427F"
        : "#343B41"};
    border: 1.2182px solid
      ${(props) =>
        props.disableButton
          ? "#59323F"
          : props.submitButton
          ? "#FF427F"
          : "#343B41"};
  }
`;

export default Container;
