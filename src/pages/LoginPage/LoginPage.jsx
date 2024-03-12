import NewToJob from "../../components/NewToJob/NewToJob";
import LoginForm from "../../components/loginForm/LoginForm";
import "./loginpage.css";

export default function LoginPage() {
  return (
    <div className="loginpage">
      <NewToJob />
      <LoginForm />
    </div>
  );
}
