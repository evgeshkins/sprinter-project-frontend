import React from "react"
import Header from "./components/header"
import MainContainer from './components/main-container'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: "Название раздела (кликни на название любого раздела на header'е)"
        };
    }

    // изменение названия секции для second-header (в MainContainer)
    changeSection = (section) => {
        this.setState({ currentSection: section });
    }
    render() {
        return (<div className="h-screen w-full">
            {/* Передаем в header функцию изменения названия секции для second-header */}
            <Header changeSection={this.changeSection} />
            {/* Передаем в MainContainer текущее состояние названия секции 
            (в main-container содержится second-header) */}
            <MainContainer currentSection={this.state.currentSection} />
        </div>)
    }
}

export default App