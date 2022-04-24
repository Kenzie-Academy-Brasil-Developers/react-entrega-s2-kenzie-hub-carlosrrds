import { Container, InputContainer } from "./styled";

const Input = ({ register, name, label, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer {...register(name)} {...rest} />
    </Container>
  );
};

export default Input;
