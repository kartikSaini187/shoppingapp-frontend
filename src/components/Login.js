import { useState } from "react";
import "../styles/Login.css";
const Login = () => {
    // const [label, setLabel] = useState()

  return (
    <div className="login-container">
      <div class="title">Log In to your account</div> 
      <form>
        <div class="field">
          <input type="text" required />    
          <label>Email</label>
        </div>
        <div class="field">
          <input type="text" required />
          <label>Password</label>
        </div>
        {/* <div class="content">
          <div class="checkbox">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <div class="pass-link">
            <button>
              <span>Forgot Password?</span>
            </button>
          </div>
        </div> */}
        <div class="field">
          <button type="submit" className={`login-btn`}> Login</button>
        </div>
        {/* <div class="signup-link">
          Not a member?
          <button>
            <span>Forgot Password?</span>
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
