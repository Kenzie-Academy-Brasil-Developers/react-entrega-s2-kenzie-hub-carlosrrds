import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 100%;
    background-color: var(--Grey-3);
    border: 1px solid var(--Grey-3);
  }
`;

export const ContentContainer = styled.div`
  width: calc(100vw - 12px);
  max-width: 791.73px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
