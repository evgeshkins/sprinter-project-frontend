import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext()

export const useSection = () => useContext(SectionContext);

export const SectionProvider = ({ child }) => {
    const [currentSection, setCurrentSection] =
        useState("Название раздела (кликни на название любого раздела на header'е)")
    
    const changeSection = section => {
        setCurrentSection(section)
    }
    return (
        <SectionContext.Provider value={{ currentSection, changeSection }}>
            {child}
        </SectionContext.Provider>
    )
}