import React from "react";
import RankPlateItem from "./rank-plate-item";

const RankPlate = () => {
    const rankData = [
        { author: "Алексей Столяров", content: "2000" },
        { author: "Игорь Войтенко", content: "1700" },
        { author: "Кирилл Сарычев", content: "1300" },
    ];

    return (
        <div className="bg-blue-400 p-4 mb-20">
            {rankData.map((rank, index) => (
                <RankPlateItem key={index} author={rank.author} content={rank.content} />
            ))}
        </div>
    );
};

export default RankPlate;