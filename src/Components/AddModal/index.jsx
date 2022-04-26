import { Container, Modal, Header } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../Services/api";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { toast } from "react-toastify";

const AddModal = ({ setAdd, token }) => {
  const addSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addSchema),
  });

  const handleAdd = (data) => {
    console.log(data);
    kenzieHubApi
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setAdd(false);
        toast.success("Tecnologia deletada com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <Container>
      <Modal>
        <Header>
          <h3>Cadastrar Tecnologia</h3>
          <p onClick={() => setAdd(false)}>X</p>
        </Header>
        <form onSubmit={handleSubmit(handleAdd)}>
          <Input
            label={"Nome"}
            name={"title"}
            register={register}
            placeholder="Digite o nome do seu projeto"
          />
          <p>{errors.title?.message}</p>
          <Select register={register} name="status" label="Selecionar Status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <Button
            disableButton={errors.title}
            type="submit"
            submitButton
            width="324px"
          >
            Cadastrar Tecnologia
          </Button>
        </form>
      </Modal>
    </Container>
  );
};

export default AddModal;
