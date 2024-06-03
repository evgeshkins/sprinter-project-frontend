import React from "react";
import { Link } from "react-router-dom";


const NewsPlateItem = ({ide, title, content }) => {
    return (
        <div className="bg-white border-b p-4" style={{ marginBottom: '10px' }}>
                <Link to="/"><h2 className="text-lg font-bold">{title}</h2></Link>
                <p className="text-sm">{content}</p>

        </div>
    );
};

export default NewsPlateItem;