import React from "react";

const NewsPlateItem = ({ title, content }) => {
    return (
        <div className="bg-white border-b p-4" style={{ marginBottom: '10px' }}>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm">{content}</p>
        </div>
    );
};

export default NewsPlateItem;