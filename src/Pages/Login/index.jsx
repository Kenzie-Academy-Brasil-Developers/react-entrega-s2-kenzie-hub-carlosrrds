import { Container, ContainerForm } from "./styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { kenzieHubApi } from "../../Services/api";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Logo from "../../Components/Logo";

const Login = ({}) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = async (data) => {
    const response = await kenzieHubApi
      .post("/sessions/", data)
      .catch((err) => {
        toast.error("Erro na autenticação, verifique seus dados.");
      });

    const { user, token } = response.data;

    localStorage.setItem("@KenzieHub:token", token);
    localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

    toast.success("Login efetuado com sucesso!");

    history.push(`/home/${user.id}`);
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
      <Logo />
      <ContainerForm>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            register={register}
            name="email"
            label="Email"
            placeholder="Digite seu e-mail de acesso"
          />
          <p>{errors.email?.message}</p>
          <Input
            register={register}
            name="password"
            label="Senha"
            placeholder="Digite sua senha de acesso"
            type="password"
          />
          <p>{errors.password?.message}</p>
          <Button
            disableButton={errors.email || errors.password}
            submitButton
            width="320px "
            type="submit"
          >
            Entrar
          </Button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <Button width="320px" onClick={() => history.push("/register")}>
          Cadastrar-se
        </Button>
      </ContainerForm>
    </Container>
  );
};

export default Login;
