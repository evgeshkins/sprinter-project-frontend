import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [image, setImage] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Получение сохраненного токена

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('short_description', shortDescription);
        formData.append('full_description', fullDescription);
        formData.append('image', image);

        try {
            const response = await axios.post('http://?', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });

            setSubmitSuccess(true);

            setTitle('');
            setShortDescription('');
            setFullDescription('');
            setImage(null);

            navigate('/');
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);

            setSubmitSuccess(false);
        }
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <Link to="/" className="fixed top-2 left-2 text-blue-700 px-4 py-2 rounded border border-blue-700">Назад</Link>

            <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-center mb-4">Создание поста</h2>

                {submitSuccess === false && <p style={{ color: 'red' }}>Ошибка при отправке данных. Попробуйте снова.</p>}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label style={{ color: 'black' }}>Заголовок:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 rounded border" style={{ color: 'black' }} />

                    <label style={{ color: 'black' }}>Короткое описание:</label>
                    <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} className="w-full px-3 py-2 rounded border" rows="3" style={{ color: 'black' }}></textarea>

                    <label style={{ color: 'black' }}>Полное описание:</label>
                    <textarea value={fullDescription} onChange={(e) => setFullDescription(e.target.value)} className="w-full px-3 py-2 rounded border" rows="5" style={{ color: 'black' }}></textarea>

                    <label style={{ color: 'black' }}>Прикрепить картинку:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />

                    <button type="submit" className="w-full bg-blue-700 text-white rounded py-2">Создать пост</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;