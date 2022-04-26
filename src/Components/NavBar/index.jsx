import { Container } from "./styled";
import {} from "react-router-dom";
import Logo from "../Logo";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo />
      <button
        onClick={() => {
          history.push("/");
          localStorage.clear();
        }}
      >
        Sair
      </button>
    </Container>
  );
};

export default NavBar;
