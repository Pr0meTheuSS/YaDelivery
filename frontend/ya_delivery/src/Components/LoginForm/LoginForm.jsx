import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import useInput from "../../Hooks/InputHooks";
import React from 'react';
import { loginUserMutation } from './Mutation';
import { useMutation, gql } from '@apollo/client';

const LoginForm = () => {
    const email = useInput('', {   
        isEmpty: true,
        isEmail: true
    });

    const password = useInput('', {
        isEmpty: true,
        minLen: 8
    });

    // useMutation хук для отправки запроса
    const [authenticate, { data, loading, error }] = useMutation(loginUserMutation);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем стандартную отправку формы
        try {
            const result = await authenticate({
                variables: {
                    input: {  // Передаем переменные в объект input
                        email: email.value,
                        password: password.value
                    }   
                }
            });
            console.log(result.data.login.token); // Логирование полученного токена
            // Сохраняем токен в localStorage
            localStorage.setItem('authToken', result.data.login.token);
        } catch (error) {
            console.error("Ошибка аутентификации", error);
        }
    };
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;

    return (
        <div className="wrapper" >
            <form
                action=""
                onSubmit={handleSubmit}
            >
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
                    <a href="register">Forgot password?</a>
                </div>

                <div className="register-link">
                    <p>Don't have an account? <a href="register">Register</a></p>
                </div>
            
            </form>
        </div>
    );
};

export default LoginForm;
