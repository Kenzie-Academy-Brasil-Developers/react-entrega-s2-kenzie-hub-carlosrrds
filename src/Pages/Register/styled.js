import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 369px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Grey-3);
  border-radius: 4px;
  width: 100%;

  h1 {
    color: var(--Grey-0);
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin-top: 42px;
  }

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--Grey-1);
    margin-top: 24px;
  }

  p {
    color: var(--Negative);
    font-size: 12px;
    max-width: 300px;
  }

  div + button {
    margin-bottom: 30px;
  }
`;
