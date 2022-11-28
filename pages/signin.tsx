import AuthForm from "../components/authForm";

const Signin = () => {
  return <AuthForm action="signin" />;
};

Signin.authPage = true;

export default Signin;
