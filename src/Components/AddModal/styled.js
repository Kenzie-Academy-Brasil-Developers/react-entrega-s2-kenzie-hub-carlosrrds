import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: var(--Grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 369px;
  height: 379px;
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100;
    max-width: 320px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
  }

  p {
    color: var(--Negative);
    font-size: 12px;
  }

  p + div {
    margin-top: 5px;
  }
`;

export const Header = styled.div`
  background-color: var(--Grey-2);
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: var(--Grey-0);
    margin-left: 20px;
  }

  p {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: var(--Grey-1);
    margin-right: 12px;
    cursor: pointer;
  }
`;
