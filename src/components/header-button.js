import React from 'react';
import { useContext } from 'react';
import { SectionContext } from '../section-context';

// Компонент DropdownButton принимает название раздела и текст кнопки
const HeaderButton = ({ sectionName, buttonText }) => {
    const { changeSection } = useContext(SectionContext);
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        changeSection(sectionName);
    };

    return (
        <div className="relative">
            <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
                onClick={toggleDropdown} aria-expanded={isOpen}>
                {buttonText}
                <svg className="h-5 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg">
                    <a href="#Заглушка" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Заглушка</a>
                </div>
            )}
        </div>
    );
};

export default HeaderButton;
