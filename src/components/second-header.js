// import React, {useState} from "react"
// import { useSection } from '../section-context';
// const SecondHeader = () => {
//     const [isSettingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
//     const { currentSection } = useSection();

//     const toggleDropdown = () => {
//         setSettingsDropdownOpen(!isSettingsDropdownOpen);
//     };
//     return (
//         <div className="bg-white col-span-7 row-span-1 pl-3 pt-1 relative">
//             <div>{currentSection}</div>
//             <button className="flex items-center" onClick={toggleDropdown}>
//                 Настройки
//                 <svg className="pt-1 h-5 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//                 </svg>
//             </button>
//             {/* Условное отображение dropdown */}
//             {isSettingsDropdownOpen && (
//                 <div className="absolute mt-1 w-56 bg-white border border-gray-200 rounded shadow">
//                     <a href="#Заглушка" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Заглушка
//                     </a>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SecondHeader;