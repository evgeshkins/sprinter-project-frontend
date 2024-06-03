import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaComment, FaTimes } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';
import { VKShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';
import { VKIcon, TelegramIcon, WhatsappIcon } from 'react-share';
import axios from "axios";

const NewsPlateItem = ({ id, author, title, content, likes_count }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(likes_count);
    const [showSharingOptions, setShowSharingOptions] = useState(false);
    const modalRef = useRef(null);
    const user = localStorage.getItem('user_id');
 
    const handleLike = async () => {
        setLiked(!liked);
        try {
            const response = await axios.post(`/api/posts/${id}/like/`, {user});
            const newLikes = liked ? likes - 1 : likes + 1;
            setLiked(!liked);
            setLikes(newLikes);
            console.log('Like submitted successfully!');
        } catch (error) {
            console.error('Error submitting like:', error);
        }
    }; 

    const handleToggleSharingOptions = () => {
        setShowSharingOptions((prevShow) => !prevShow);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowSharingOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white border-b p-4" style={{ marginBottom: '10px' }}>
            <h1 className="text-lg font-bold">
                <em>{author.last_name} {author.first_name} {author.middle_name}</em>
            </h1>            
            <Link to={`/viewpost/${id}`}>
                <h2 className="text-lg font-bold">{title}</h2>
            </Link>
            <p className="text-sm">{content}</p>
            <div className="flex items-left space-y-10">
                <div className="flex items-left space-x-6">
                    <button onClick={handleLike} className={`flex items-center  ${liked ? 'text-red-500' : ''}`}>
                        <FaThumbsUp /> {likes}
                    </button>
                    <button><FaComment /></button>
                    <button onClick={handleToggleSharingOptions}><IoShareSocial /></button>
                </div>
            </div>
            {showSharingOptions && (
                <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
                    <div ref={modalRef} className="bg-white p-4 rounded-md">
                        <button onClick={handleToggleSharingOptions} className="absolute top-2 right-2 text-gray-500"><FaTimes /></button>
                        <h3 className="text-lg font-bold mb-4">Поделиться:</h3>
                        <div className="flex items-center justify-center space-x-3">
                            <VKShareButton url={`http://localhost:8000/api/v1/posts/${id}`} quote={title}>
                                <VKIcon size={32} round />
                            </VKShareButton>
                            <TelegramShareButton url={`http://localhost:8000/api/v1/posts/${id}`} title={title}>
                                <TelegramIcon size={32} round />
                            </TelegramShareButton>
                            <WhatsappShareButton url={`http://localhost:8000/api/v1/posts/${id}`} title={title} separator="::">
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsPlateItem;