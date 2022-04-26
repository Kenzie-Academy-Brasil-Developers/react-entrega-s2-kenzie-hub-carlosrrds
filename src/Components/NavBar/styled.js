import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border-radius: 4px;
    background-color: var(--Grey-3);
    width: 67.49px;
    height: 32px;
    border: 0;
    color: var(--Grey-0);
    font-weight: 600;
    font-size: 12px;
    :hover {
      background-color: var(--Grey-2);
    }
  }
`;
