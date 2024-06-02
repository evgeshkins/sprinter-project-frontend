import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./home.js";
import Auth from "./auth.js";
import Post from "./post.js";


export default function App() {
    return (
        
      <Router basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element = {<Auth />} />
                <Route path="/post" element = {<Post />} />
            </Routes>
        </Router>
    
    );
  }
  