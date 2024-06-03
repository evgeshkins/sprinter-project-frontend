import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const FullPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`/api/posts/${postId}`);
                setPost(response.data); // Assuming the response contains the post data
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-container">
            <h1>{post.title}</h1>
            <p className="small-text">{post.small_text}</p>
            <img src={post.image_src} alt={post.title} />
            <p className="full-text">{post.full_text}</p>
            <p>Created at: {post.create_date}</p>
            <p>User: {post.user.username}</p>
            <p>Likes: {post.likes_count}</p>
        </div>
    );
};

export default FullPost;