import React from "react"
import Header from "./components/header"
import SecondHeader from "./components/second-header"


class App extends React.Component {
    // место под переменные
    render() {
        return (<div>
            <Header />
            <SecondHeader />
        </div>)
    }
}

export default App