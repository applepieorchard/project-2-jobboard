import "./LoginForm.css";

export default function LoginForm() {
  return (
    <div className="loginform">
      <h4 className="login-heading">Login</h4>
      <form className="">
        <div className="label-section">
          <label>Email</label>
        </div>
        <div className="input-section">
          <input type="email" name="" placeholder="Enter Email ID" />
        </div>

        <div className="label-section">
          <label>Password</label>
        </div>
        <div className="input-section">
          <input type="password" name="" placeholder="Enter Password" />
        </div>
        <div className="btn-section">
          <button>Login</button>
        </div>

        <div className="btn-section">
          <button>New User | Existing User</button>
        </div>
      </form>
    </div>
  );
}
