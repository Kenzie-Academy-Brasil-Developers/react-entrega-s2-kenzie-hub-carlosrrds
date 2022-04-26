import { Container, ListContainer, HeaderContainer } from "./styled";
import CardTechnologie from "../CardTechnologie";
import { AiOutlinePlus } from "react-icons/ai";

const TechnologieList = ({ setTechEdit, setAdd, technologies, setEdit }) => {
  return (
    <Container>
      <HeaderContainer>
        <h2>Tecnologias</h2>
        <button onClick={() => setAdd(true)}>
          <AiOutlinePlus />
        </button>
      </HeaderContainer>
      <ListContainer>
        <ul>
          {technologies.map((tech) => (
            <li key={tech.id}>
              <CardTechnologie
                setTechEdit={setTechEdit}
                setEdit={setEdit}
                tech={tech}
              />
            </li>
          ))}
        </ul>
      </ListContainer>
    </Container>
  );
};

export default TechnologieList;
