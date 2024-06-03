import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const FullPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-lg mt-4">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-600 mb-2">Создано: {formatDate(post.create_date)}</p>
            {post.image_src}
            <p className="text-base mb-4">
                <span className="font-bold">Пользователь: </span>
                {post.user.last_name} {post.user.first_name} {post.user.middle_name}
            </p>
            <p className="text-lg mb-4">{post.full_text}</p>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Количество лайков: {post.likes_count}</p>
            </div>
        </div>
    );
};

export default FullPost;