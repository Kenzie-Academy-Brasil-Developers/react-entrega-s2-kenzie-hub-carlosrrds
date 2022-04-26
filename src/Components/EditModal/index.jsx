import { Container, Modal, Header } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../Services/api";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { useState } from "react";
import { toast } from "react-toastify";

const EditModal = ({ setEdit, techEdit, token }) => {
  const { title, id } = techEdit;

  const editSchema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editSchema),
  });

  const handleEdit = ({ status }) => {
    const techStatus = { status };
    kenzieHubApi
      .put(`/users/techs/${id}`, techStatus, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setEdit(false);
        toast.success("Tecnologia editada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  const handleDelete = () => {
    kenzieHubApi
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setEdit(false);
        toast.success("Tecnologia deletada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado.");
      });
  };

  return (
    <Container>
      <Modal>
        <Header>
          <h3>Tecnologia Detalhers</h3>
          <p onClick={() => setEdit(false)}>X</p>
        </Header>
        <form onSubmit={handleSubmit(handleEdit)}>
          <Input
            label={"Nome do projeto"}
            name={"title"}
            register={register}
            placeholder={title}
            disabled
          />
          <Select register={register} name="status" label="Status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <Button type="submit" submitButton width="204px">
            Salvar alterações
          </Button>
          <Button type="button" onClick={handleDelete} width="98px">
            Excluir
          </Button>
        </form>
      </Modal>
    </Container>
  );
};

export default EditModal;
