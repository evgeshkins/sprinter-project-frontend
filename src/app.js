import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Auth from "./auth.js";
import Post from "./post.js";
import ViewPost from "./viewpost";
import FullPost from './components/fullpost';

const App = () => {
    return (
        <Router basename="/">
            <div className="bg-fixed bg-cover bg-center h-screen w-screen overflow-auto" style={{backgroundImage: 'url(/1.jpg)'}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/viewpost/:id" element={<ViewPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;