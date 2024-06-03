import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SectionContext } from "../section-context";
import HeaderButton from "./header-button";

const Header = ({}) => {
  const { changeSection } = useContext(SectionContext);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isLogged') === 'true');


  const handleLogout = () => {
    localStorage.removeItem('isLogged');
    setIsAuthenticated(false);
  };

  return (
    <header className="bg-blue-500 sm:h-12 md:h-12 lg:h-12 xl:h-12">
      <nav className="mx-auto flex max-w-8xl items-center justify-between pd-3 pt-3 ml-0 mr-0 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-0 mr-12 items-center">
          <Link to="/" className="-m-1.5 p-1.2 flex items-center">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company Logo" />
            <span className="ml-3.5 text-white font-medium">Sprinter</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button className="text-sm font-semibold leading-6 text-white" onClick={() => changeSection("Моя лента")}>Моя лента</button>
          <HeaderButton sectionName="Посты" buttonText="Понравившиеся" />
          <HeaderButton sectionName="Соревнования" buttonText="Соревнования" />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div>
            <input id="search" className="lu tn adu afa alm arp atf aub axu bnd boa bof bon cia cic mr-10 w-450 rounded-lg pl-3 h-6" placeholder="Поиск" type="search" name="search" />
          </div>
          <Link to={isAuthenticated ? '/' : '/auth'} className="text-sm font-semibold leading-6 text-white ml-10 mr-3" onClick={handleLogout}>
            {isAuthenticated ? 'Выйти' : 'Войти'} <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link to="/post" className="text-sm font-semibold leading-6 text-white ml-10 mr-3">Создать пост</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
