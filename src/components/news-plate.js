import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsPlateItem from "./news-plate-item";

const NewsPlate = () => {
    // const [newsData, setNewsData] = useState([]);
    const newsData = [
        {id:3, title: "Новость 1", content: "Содержание новости 1", likes_count:45 },
        {id:3, title: "Новость 2", content: "Содержание новости 2", likes_count:4 },
        {id:3, title: "Новость 3", content: "Содержание новости 3", likes_count:25 },
    ]

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://your-django-backend-url/api/newsData/');
    //             setNewsData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []); // Run only on the initial render

    return (
        <div className="bg-blue-400 p-4 mb-20">
            {newsData.map((news, index) => (
                <NewsPlateItem key={index} id={news.id} title={news.title} content={news.content} likes_count={news.likes_count} />
            ))}
        </div>
    );
};

export default NewsPlate;