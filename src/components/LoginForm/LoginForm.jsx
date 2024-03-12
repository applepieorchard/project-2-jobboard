import "./LoginForm.css";

export default function LoginForm() {
  return (
    <div className="loginform">
      <p>Login</p>
      <form>
        <input type="email" name="" />
        <input type="password" name="" />
        <button>Login</button>
        <p>New User | Existing User</p>
      </form>
    </div>
  );
}
