import React from "react";
import { FaUser } from "react-icons/fa";
import useInput from "../../Hooks/InputHooks";

const ResetPassword = () => {
    const email = useInput('', {   
        isEmpty: true,
        isEmail: true
    });

    return (
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
    );
}

export default ResetPassword;
