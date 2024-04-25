import React from "react"
import SecondHeader from './second-header'
import PostsContainer from './posts-container'
import RankContainer from "./rank-container"

class MainContainer extends React.Component{
    render() {
        return (
            <div className="div mx-32 h-full p-4 grid grid-cols-10 grid-rows-10" >
                <SecondHeader />
                <PostsContainer />
                <RankContainer />
            </div>   
        )
    }
}

export default MainContainer