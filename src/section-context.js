import React, { createContext, useContext, useState } from "react";

export const SectionContext = createContext()

export const useSection = () => useContext(SectionContext);

export const SectionProvider = ({ children }) => {
    const [currentSection, setCurrentSection] =
        useState("Название раздела (кликни на название любого раздела на header'е)")
    
    const changeSection = section => {
        setCurrentSection(section)
    }
    return (
        <SectionContext.Provider value={{ currentSection, changeSection }}>
            {children}
        </SectionContext.Provider>
    )
}