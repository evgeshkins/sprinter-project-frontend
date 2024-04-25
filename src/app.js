import React from "react"
import Header from "./components/header"
import MainContainer from './components/main-container'


class App extends React.Component {
    // место под переменные
    render() {
        return (<div className="h-screen w-full">
            <Header />
            <MainContainer />
        </div>)
    }
}

export default App