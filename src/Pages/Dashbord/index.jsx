import { useEffect, useState } from "react";
import { kenzieHubApi } from "../../Services/api";
import { Container, ContentContainer } from "./styled";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import TechnologieList from "../../Components/TechnologieList";
import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header";
import EditModal from "../../Components/EditModal";
import AddModal from "../../Components/AddModal";

const Dashbord = () => {
  const params = useParams();

  const [technologies, setTechnologies] = useState([]);
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [techEdit, setTechEdit] = useState({});
  const [token] = useState(localStorage.getItem("@KenzieHub:token"));

  useEffect(() => {
    kenzieHubApi
      .get(`users/${params.user_id}`)
      .then((response) => response.data)
      .then((data) => {
        setTechnologies(data.techs);
        setName(data.name);
        setModule(data.course_module);
      })
      .catch((err) => console.log(err));
  });

  if (!localStorage.getItem("@KenzieHub:token")) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      {add && <AddModal setAdd={setAdd} token={token} />}
      {edit && (
        <EditModal setEdit={setEdit} techEdit={techEdit} token={token} />
      )}
      <ContentContainer>
        <NavBar />
      </ContentContainer>
      <hr />
      <ContentContainer>
        <Header name={name} module={module} />
      </ContentContainer>
      <hr />
      <ContentContainer>
        <TechnologieList
          setTechEdit={setTechEdit}
          technologies={technologies}
          setEdit={setEdit}
          setAdd={setAdd}
        />
      </ContentContainer>
    </Container>
  );
};

export default Dashbord;
