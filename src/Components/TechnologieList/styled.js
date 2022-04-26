import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  background-color: var(--Grey-3);
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px;

  li {
    list-style: none;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    width: 100%;
    margin: 0 8.5px;
  }

  li + li {
    margin-top: 0px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46.93px;

  h2 {
    font-weight: 600;
    font-size: 11.4296px;
    line-height: 13px;
    color: var(--Grey-0);
  }

  button {
    background-color: var(--Grey-3);
    border-radius: 2.85739px;
    border: none;
    color: var(--White);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;

    :hover {
      background-color: var(--Grey-2);
    }
  }
`;
