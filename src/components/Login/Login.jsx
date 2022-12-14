import {
  MainContainer,
  Title,
  SecondTitle,
  Input,
  Button,
  Paragraph,
  RegisterButton,
  Form,
  ErrorStyle,
  Facebook,
  Google,
  SocialContainer
} from "./stylesLogin";
import { useForm } from "react-hook-form";
import GoogleIcon from '../../assets/Google.svg'
import FacebookIcon from '../../assets/Facebook.svg'


export function Login() {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <MainContainer>
      <Title>Te damos la bienvenida a TaHouse</Title>
      <SecondTitle>Inicia sesión para una mejor experiencia</SecondTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: {
              value: true,
              message: "Todos los campos son requeridos",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "El formato no es correcto",
            },
          })}
        />
        <Input
          name="password"
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "Todos los campos son requeridos",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        {errors.password && <ErrorStyle>{errors.password.message}</ErrorStyle>}
        <Button>Ingresar</Button>
      </Form>
      <Paragraph>
        <RegisterButton href="">¿No tienes cuenta? Registrate</RegisterButton>
        <br />O ingresa con una red social
      </Paragraph>
      <SocialContainer>
      <Button>
        <Facebook src={FacebookIcon} alt="facebook" /> Ingresar con Facebook
        </Button>
      <Button><Google src={GoogleIcon} alt="google" />Ingresar con Google</Button>
      </SocialContainer>
  
    </MainContainer>
  );
}
