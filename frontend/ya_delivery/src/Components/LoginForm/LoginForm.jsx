import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import useInput from "../../Hooks/InputHooks";

const LoginForm = () => {
    const email = useInput('', {   
        isEmpty: true,
        isEmail: true
    });

    const password = useInput('', {
        isEmpty: true,
        minLen: 8
    });

    return (
        <div className="wrapper" >
            <form action="">
                <h1>Login</h1>

                <div className="input-box">
                    <input 
                        name="email" 
                        type="text" 
                        placeholder="Email" 
                        required 
                        onChange={email.onChange}
                        onBlur={email.onBlur}
                    />
                    <FaUser className="icon" />
                </div>
                {email.isDirty && (email.isEmpty || email.emailError) && 
                    <div className="error">Invalid email</div>}

                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        onChange={password.onChange} 
                        onBlur={password.onBlur}
                    />
                    <FaLock className="icon" />
                </div>
                {password.isDirty && (password.minLenError || password.isEmpty) &&
                    <div className="error">Password length less than 8</div>}

                <button disabled={!email.inputValid || !password.inputValid}
                    type="submit">Login</button>
          
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <div className="register-link">
                    <p>Don't have an account? <a href="register">Register</a></p>
                </div>
            
            </form>
        </div>
    );
};

export default LoginForm;
