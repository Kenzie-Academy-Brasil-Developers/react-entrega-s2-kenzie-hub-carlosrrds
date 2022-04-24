import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  justify-content: space-between;
  width: 100vw;
  max-width: 359px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Grey-3);
  border-radius: 4px;
  height: 550px;
  width: 100%;

  h1 {
    color: var(--Grey-0);
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin-top: 42px;
  }

  span {
    ont-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--Grey-1);
    margin-top: 24px;
  }
`;
