import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--Grey-0);
  margin-top: 26px;

  label {
    font-weight: 400;
    font-size: 12.182px;
    color: var(--Grey-0);
  }
`;

export const InputContainer = styled.input`
  width: 320px;
  height: 48px;
  background-color: var(--Grey-2);
  border-radius: 4px;
  border: 1.2182px solid var(--Grey-2);
  box-sizing: border-box;
  padding: 0px 16.24px;
  display: flex;
  align-items: center;
  margin-top: 22.33px;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: var(--Grey-1);

  :focus {
    border: 1.2182px solid var(--Grey-0);
    color: var(--Grey-0);
  }

  ::placeholder {
    color: var(--Grey-1);
  }
`;
