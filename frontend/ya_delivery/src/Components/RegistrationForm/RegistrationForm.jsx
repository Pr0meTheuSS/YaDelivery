import React from "react";
import './RegistrationForm.css'
import { FaUser, FaLock, FaPray } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import useInput from "../../Hooks/InputHooks";

const RegistrationForm = () => {
    const email = useInput('', {   
        isEmpty: true,
        isEmail: true
    });

    const password = useInput('', {
        isEmpty: true,
        minLen: 8
    });

    const repeatedPassword = useInput('', {
        isEmpty: true,
        minLen: 8,
        maxLen: 20,
        originalPassword: password.value
    });

    const username = useInput('', {
        isEmpty: true,
        maxLen: 20
    });

    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>

                <div className="input-box">
                    <input 
                        name="email" 
                        type="text" 
                        placeholder="Username" 
                        required 
                        onChange={username.onChange}
                        onBlur={username.onBlur}
                    />
                    <FaPray className="icon" />
                </div>
                {username.isDirty && (username.isEmpty || username.maxLenError) &&
                    <div className="error">Username must be less than 20 characters</div>}

                <div className="input-box">
                    <input 
                        name="email" 
                        type="text" 
                        placeholder="Email" 
                        required 
                        onChange={email.onChange}
                        onBlur={email.onBlur}
                    />
                    <FaUser  className="icon" />
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
                {password.isDirty && (password.isEmpty || password.minLenError || password.maxLenError) &&
                    <div className="error">Password must be less than 20 and greater than 8 characters</div>}

                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Repeat password" 
                        required 
                        onChange={repeatedPassword.onChange} 
                        onBlur={repeatedPassword.onBlur} 
                    />
                    <FaLock className="icon" />
                </div>
                {(repeatedPassword.isDirty && repeatedPassword.passwordError) &&
                    <div className="error">Repeated password != password</div>}

                <div className="remember">
                    <label><input type="checkbox" />Remember me</label>
                </div>

                <button type="submit">Sign up</button>
            
            </form>
        </div>
    );
};

export default RegistrationForm;