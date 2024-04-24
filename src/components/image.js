import React from "react"

class Image extends React.Component{
    render() {
        return (
            // свойство image - передаем путь к картинке
            <img src={this.props.image} alt="-" />
        )
            
        
    }
}

export default Image