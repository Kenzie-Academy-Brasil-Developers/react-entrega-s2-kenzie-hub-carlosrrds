import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Grey-4);
  height: 48.73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 4.06066px;
  cursor: pointer;

  h3 {
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: var(--Grey-0);
    margin-left: 18px;
  }

  span {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--Grey-1);
    margin-right: 18px;
  }

  :hover {
    background-color: var(--Grey-2);
  }
`;
