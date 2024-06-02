import React, { useState } from 'react';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // ... ваш обработчик регистрации
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // ... ваш обработчик аутентификации
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <div className="text-center">
                    {isSignUp ? (
                        <form onSubmit={handleSignup} className="space-y-4">
                            <h2>Регистрация</h2>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded border" />
                            <label htmlFor="password">Пароль:</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 rounded border" />
                            <button type="submit" className="w-full bg-blue-700 text-white rounded py-2">Зарегистрироваться</button>
                        </form>
                    ) : (
                        <form onSubmit={handleLogin} className="space-y-4">
                            <h2>Авторизация</h2>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded border" />
                            <label htmlFor="password">Пароль:</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 rounded border" />
                            <button type="submit" className="w-full bg-blue-700 text-white rounded py-2">Войти</button>
                        </form>
                    )}
                    <button onClick={() => setIsSignUp(!isSignUp)} className="text-center mt-4 py-2 w-full rounded bg-blue-700 text-white">
                        {isSignUp ? 'Вход' : 'Регистрация'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;