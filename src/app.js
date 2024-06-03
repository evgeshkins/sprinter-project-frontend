import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Auth from "./auth.js";
import Post from "./post.js";
import ViewPost from "./viewpost";
import FullPost from './components/fullpost'; // Импортируйте компонент FullPost

export default function App() {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/post" element={<Post />} />
                <Route path="/viewpost/:id" element={<ViewPost />} />
            </Routes>
        </Router>
    );
}