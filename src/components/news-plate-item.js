import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const NewsPlateItem = ({ id, title, content, likes_count }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(likes_count);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    const handleComment = () => {
        // Логика обработки комментария
    };

    const handleShare = () => {
        // Логика обработки шаринга
    };

    return (
        <div className="bg-white border-b p-4" style={{ marginBottom: '10px' }}>
            <Link to={`/post/${id}`}>
                <h2 className="text-lg font-bold">{title}</h2>
            </Link>
            <p className="text-sm">{content}</p>
            
            <div class="flex items-left space-x-5">
                <button onClick={handleLike} className={`flex items-center ${liked ? 'text-red-500' : ''}`}>
                    <FaThumbsUp /> {likes}
                </button>
                <button onClick={handleComment}><FaComment /></button>
                <button onClick={handleShare}><FaShare /></button>
            </div>
        </div>
    );
};

export default NewsPlateItem;