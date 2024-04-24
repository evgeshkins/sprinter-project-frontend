import React from "react"

class Header extends React.Component {
    render() {
        return (
            <header class="bg-blue-500 sm:h-12 md:h-12 lg:h-12 xl:h-12">
                <nav class="mx-auto flex max-w-8xl items-center justify-between pd-3 pt-3 ml-0 mr-0 lg:px-8" aria-label="Global">
                    <div class="flex lg:flex-0 mr-12 items-center"> {/* Добавлен класс items-center для вертикального выравнивания */}
                        <a href="#" class="-m-1.5 p-1.2 flex items-center"> {/* Добавлен flex для выравнивания логотипа и текста */}
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company Logo" />
                            <span class="ml-3.5 text-white font-medium">Sprinter</span> {/* Добавлен текст рядом с логотипом */}
                        </a>
                    </div> 
                    <div class="hidden lg:flex lg:gap-x-12" >
                        <a href="#" class="text-sm font-semibold leading-6 text-white">Моя лента</a>
                        <div class="relative">
                            <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white" aria-expanded="false">
                                Посты
                                <svg class="h-5 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {/* Dropdown is here*/}
                        </div>
                        <div class="relative">
                            <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white" aria-expanded="false">
                                Соревнования
                                <svg class="h-5 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5 a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {/* Dropdown is here*/}
                        </div>

                    </div>

                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                        <div class>
                            <input id="search" class="lu tn adu afa alm arp atf aub axu bnd boa bof bon cia cic mr-10 w-450 rounded-lg pl-3 h-6" placeholder="Поиск" type="search" name="search" />
                        </div>
                        <a href="#" class="text-sm font-semibold leading-6 text-white ml-10 mr-3">Войти <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header