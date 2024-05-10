import React from "react";
import NewsPlateItem from "./news-plate-item";

const NewsPlate = () => {
    const newsData = [
        { title: "Новость 1", content: "Содержание новости 1" },
        { title: "Новость 2", content: "Содержание новости 2" },
        { title: "Новость 3", content: "Содержание новости 3" },
        { title: "Новость 1", content: "Содержание новости 1" },
        { title: "Новость 2", content: "Содержание новости 2" },
        { title: "Новость 3", content: "Содержание новости 3" },
        { title: "Новость 1", content: "Содержание новости 1" },
        { title: "Новость 2", content: "Содержание новости 2" },
        { title: "Новость 3", content: "Содержание новости 3" },
        { title: "Новость 1", content: "Содержание новости 1" },
        { title: "Новость 2", content: "Содержание новости 2" },
        { title: "Новость 3", content: "Содержание новости 3" },
        { title: "Новость 1", content: "Содержание новости 1" },
        { title: "Новость 2", content: "Содержание новости 2" },
        { title: "Новость 3", content: "Содержание новости 3" },
        { title: "Новость 1", content: "Содержание новости 1" },
        { title: "Новость 2", content: "Содержание новости 2" },
        { title: "Новость 3", content: "Содержание новости 3" },
    ];

    return (
        <div className="bg-blue-400 p-4 mb-20">
            {newsData.map((news, index) => (
                <NewsPlateItem key={index} title={news.title} content={news.content} />
            ))}
        </div>
    );
};

export default NewsPlate;