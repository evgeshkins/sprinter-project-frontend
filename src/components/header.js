import React, { useState, useContext } from "react";
import { SectionContext } from "../section-context";

const Header = () => {
    const { changeSection } = useContext(SectionContext);
    const [isPostsDropdownOpen, setPostsDropdownOpen] = useState(false);
    const [isCompetitionsDropdownOpen, setCompetitionsDropdownOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        if (dropdown === 'isPostsDropdownOpen') {
            setPostsDropdownOpen(!isPostsDropdownOpen);
        } else if (dropdown === 'isCompetitionsDropdownOpen') {
            setCompetitionsDropdownOpen(!isCompetitionsDropdownOpen);
        }
    };

    return (
        <header className="bg-blue-500 sm:h-12 md:h-12 lg:h-12 xl:h-12">
            <nav className="mx-auto flex max-w-8xl items-center justify-between pd-3 pt-3 ml-0 mr-0 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-0 mr-12 items-center">
                    <a href="#" className="-m-1.5 p-1.2 flex items-center">
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company Logo" />
                        <span className="ml-3.5 text-white font-medium">Sprinter</span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12" >
                    <button className="text-sm font-semibold leading-6 text-white" onClick={() => changeSection("Моя лента")}>Моя лента</button>
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
                            onClick={() => { toggleDropdown('isPostsDropdownOpen'); changeSection("Посты"); }} aria-expanded={isPostsDropdownOpen}>
                            Посты
                            <svg className="h-5 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isPostsDropdownOpen && (
                            <div className="absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg">
                                <a href="#Заглушка" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Заглушка</a>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
                            onClick={() => { toggleDropdown('isCompetitionsDropdownOpen'); changeSection("Соревнования"); }} aria-expanded={isCompetitionsDropdownOpen}>
                            Соревнования
                            <svg className="h-5 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isCompetitionsDropdownOpen && (
                            <div className="absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg">
                                <a href="#Заглушка" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Заглушка</a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <div>
                            <input id="search" className="lu tn adu afa alm arp atf aub axu bnd boa bof bon cia cic mr-10 w-450 rounded-lg pl-3 h-6" placeholder="Поиск" type="search" name="search" />
                        </div>
                        <a href="#" className="text-sm font-semibold leading-6 text-white ml-10 mr-3">Войти <span aria-hidden="true">&rarr;</span></a>
                    </div>
            </nav>
        </header>
    );
};

export default Header;
