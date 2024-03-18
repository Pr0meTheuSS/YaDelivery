import React from "react";
import './RegistrationForm.css'
import { FaUser, FaLock } from "react-icons/fa";


const RegistrationForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Repeat password" required />
                    <FaLock className="icon" />
                </div>

                <div className="remember">
                    <label><input type="checkbox" />Remember me</label>
                </div>

                <button type="submit">Sign up</button>
            
            </form>
        </div>
    );
};

export default RegistrationForm;