import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AuthPage = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginExists, setLoginExists] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged') === 'true');

    const handleSignup = async (e) => {
        e.preventDefault();
        const registered = await isLoginRegistered(login);  // Добавление await
        if (registered) {
            setLoginExists(true);
            return;
        }

        axios.post('http://localhost:8000/api/v1/signup/', { login, password})
            .then(response => {
                alert('Регистрация прошла успешно!');
                setIsSignUp(false);
            })
            .catch(error => {
                alert('Что-то пошло не так при регистрации.');
                console.error(error);
            });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        // Отправка данных на сервер для аутентификации пользователя
        try {
            const response = await axios.post('http://localhost:8000/api/v1/login/', { login, password });
            alert('Вход выполнен!');
    
            // Сохранение токена доступа в localStorage или Cookies
            localStorage.setItem('token', response.data.token);
    
            setIsLogged(true);
            navigate('/');
        } catch (error) {
            alert('Неправильный email или пароль.');
            console.error(error);
        }
    };

    const isLoginRegistered = async(login) => {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/check-login/', { login });
            return response.data.exists;
        } catch (error) {
            alert("Что-то пошло не так")
            console.error(error);
            return false;
        }
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 relative">
            <Link to="/" className="fixed top-2 left-2 text-blue-700 px-4 py-2 rounded border border-blue-700">Назад</Link>

            <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <div className="text-center">
                    {isLogged ? (
                        <div>
                            <button onClick={() => { setIsLogged(false); localStorage.removeItem('token'); }} className="w-full bg-red-700 text-white rounded py-2">Выйти</button>
                            <Link to="/create-post" className="w-full bg-green-700 text-white rounded py-2 mt-4">Создать пост</Link>
                        </div>
                    ) : (
                        <>
                            {!isSignUp ? (
                                <form onSubmit={handleLogin} className="space-y-4">
                                    <h2>Авторизация</h2>
                                    <label htmlFor="email" style={{ color: "black" }}>Email:</label>
                                    <input type="email" id="email" value={login} onChange={(e) => setLogin(e.target.value)} className="w-full px-3 py-2 rounded border" style={{ color: "black" }} />
                                    <label htmlFor="password" style={{ color: "black" }}>Пароль:</label>
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 rounded border" style={{ color: "black" }} />
                                        <span
                                            onClick={toggleShowPassword}
                                            className="absolute top-2 right-3 cursor-pointer"
                                        >
                                            {showPassword ? <FaEyeSlash color="black" /> : <FaEye color="black" />}
                                        </span>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-700 text-white rounded py-2">Войти</button>
                                </form>
                            ) : (
                                <form onSubmit={handleSignup} className="space-y-4">
                                    <h2>Регистрация</h2>
                                    <label htmlFor="email" style={{ color: "black" }}>Email:</label>
                                    <input type="email" id="email" value={login} onChange={(e) => setLogin(e.target.value)} className="w-full px-3 py-2 rounded border" style={{ color: "black" }} />
                                    <label htmlFor="password" style={{ color: "black" }}>Пароль:</label>
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 rounded border" style={{ color: "black" }} />
                                        <span
                                            onClick={toggleShowPassword}
                                            className="absolute top-2 right-3 cursor-pointer"
                                        >
                                            {showPassword ? <FaEyeSlash color="black" /> : <FaEye color="black" />}
                                        </span>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-700 text-white rounded py-2">Зарегистрироваться</button>
                                </form>
                            )}
                            {loginExists && (
                                <div className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded">
                                    Данный email уже используется!
                                </div>
                            )}
                            <button onClick={() => setIsSignUp(!isSignUp)} className="text-center mt-4 py-2 w-full rounded bg-blue-700 text-white">
                                {isSignUp ? 'Вход' : 'Регистрация'}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;