import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 359px;
  margin-top: 10vh;
  @media (max-width: 1024px) {
    margin-top: 5vh;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Grey-3);
  border-radius: 4px;
  width: 100%;
  margin-top: 30px;

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
  }

  span + button {
    margin-bottom: 20px;
  }
`;
