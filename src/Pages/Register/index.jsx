import { Container, ContainerForm } from "./styled";
import Header from "../../Components/NavBar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { kenzieHubApi } from "../../Services/api";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/Select";

const Register = () => {
  const history = useHistory();

  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Sua senha deve conter 6 digitos")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d#@$!%*?&]{6,}$/,
        "A senha deve conter letra maiúscula, letra minúscula, numero e caractere especial"
      ),
    passwordConfirmation: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senha diferente da consfirmação"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data) => {
    const { course_module, name, email, password } = data;
    const user = {
      course_module,
      name,
      email,
      password,
      bio: " ",
      contact: " ",
    };
    console.log(user);
    kenzieHubApi
      .post("/users/", user)
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((err) => toast.error("Ops! Algo deu errado."));
  };

  if (localStorage.getItem("@KenzieHub:token")) {
    return (
      <Redirect
        to={`/home/${JSON.parse(localStorage.getItem("@KenzieHub:user")).id}`}
      />
    );
  }

  return (
    <Container>
      <Header />
      <ContainerForm>
        <h1>Crie sua conta</h1>
        <span>Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(handleRegister)}>
          <Input
            register={register}
            name="name"
            placeholder="Digite aqui seu nome"
            label="Nome"
            type="text"
          />
          <p>{errors.name?.message}</p>
          <Input
            register={register}
            name="email"
            placeholder="Digite aqui seu nome"
            label="Email"
            type="email"
          />
          <p>{errors.email?.message}</p>
          <Input
            register={register}
            name="password"
            placeholder="Digite aqui seu email"
            label="Senha"
            type="password"
          />
          <p>{errors.password?.message}</p>
          <Input
            register={register}
            name="passwordConfirmation"
            placeholder="Digite novamente sua senha"
            label="Confirmar Senha"
            type="password"
          />
          <p>{errors.passwordConfirmation?.message}</p>
          <Select
            register={register}
            name="course_module"
            label="Selecionar módulo"
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </Select>
          <Button
            disableButton={
              errors.email ||
              errors.password ||
              errors.name ||
              errors.passwordConfirmation
            }
            submitButton
            width="320px "
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default Register;
