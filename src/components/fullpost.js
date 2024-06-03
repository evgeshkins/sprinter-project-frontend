// import React from 'react';
// import { Link } from 'react-router-dom';

// const PostView = () => {
//     const { id, title, content, likes_count, created_at }

//     return (
//         <div className="bg-white p-4">
//             <div className="mb-4">
//                 <h2 className="text-2xl font-bold mb-2">{title}</h2>
//                 <p className="text-sm text-gray-500">Created at: {created_at}</p>
//             </div>

//             <p className="text-lg my-4">{content}</p>

//             <div className="flex items-left space-x-5">
//                 <button className="flex items-center">
//                     <FaThumbsUp /> {likes_count}
//                 </button>
//                 <Link to={`/post/${id}/comments`} className="flex items-center">
//                     <FaComment /> View Comments
//                 </Link>
//                 {/* Добавьте кнопку "Delete" или "Edit" сюда, если требуется */}
//             </div>
//         </div>
//     );
// };

// export default PostView;