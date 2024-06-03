import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsPlateItem from "./news-plate-item";

const NewsPlate = () => {
    const [newsData, setNewsData] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/newsData/');
                setNewsData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Run only on the initial render

    return (
        <div className="bg-blue-400 p-4 mb-20">
            {newsData.map((news, index) => (
                <NewsPlateItem key={index} author={news.author} id={news.id} title={news.title} content={news.small_text} likes_count={news.likes_count} />
            ))}
        </div>
    );
};

export default NewsPlate;