import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [small_text, setShortDescription] = useState('');
    const [full_text, setFullDescription] = useState('');
    const [image_src, setImage] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user_id');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('small_text', small_text);
        formData.append('full_text', full_text);
        formData.append('image_src', "image.png");
        formData.append('user', user);
        try {
            const response = await axios.post('http://localhost:8000/api/v1/post-create/', formData, {
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
        <div className="flex justify-center items-center h-screen ">
            <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white max-w-md w-full">
                <h2 className="text-2xl text-center mb-4 font-bold"> Создание поста</h2>
                {submitSuccess === false && (
                    <p className="text-red-500 text-center mb-4">Ошибка при отправке данных. Попробуйте снова.</p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-lg" htmlFor="title">Заголовок:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 rounded border mt-1 text-black" // Add class text-black
                        />
                    </div>

                    <div>
                        <label className="text-lg" htmlFor="shortDescription">Короткое описание:</label>
                        <textarea
                            id="shortDescription"
                            value={small_text}
                            onChange={(e) => setShortDescription(e.target.value)}
                            className="w-full px-3 py-2 rounded border mt-1 text-black" // Add class text-black
                            rows="3"
                        ></textarea>
                    </div>

                    <div>
                        <label className="text-lg" htmlFor="fullDescription">Полное описание:</label>
                        <textarea
                            id="fullDescription"
                            value={full_text}
                            onChange={(e) => setFullDescription(e.target.value)}
                            className="w-full px-3 py-2 rounded border mt-1 text-black" // Add class text-black
                            rows="5"
                        ></textarea>
                    </div>

                    <div>
                        <label className="text-lg" htmlFor="image">Прикрепить картинку:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white rounded py-2 mt-3 hover:bg-blue-600"
                    >
                        Создать пост
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;