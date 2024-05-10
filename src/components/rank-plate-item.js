import React from "react";

const RankPlateItem = ({ author, content }) => {
    return (
        <div className="bg-white border-b p-4 flex flex-row items-center justify-between">
            <div>
                <h2 className="text-lg font-bold">{author}</h2>
            </div>
            <div>
                <p className="text-sm">{content}</p>
            </div>
        </div>
    );
};
 

export default RankPlateItem;