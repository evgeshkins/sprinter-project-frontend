import React from 'react';
import FullPost from './components/fullpost';
import Header from "./components/header"
import { SectionProvider } from "./section-context"

const AuthPageRoute = () => {
    return (
        <div className="h-screen w-full">
            <SectionProvider>
                <Header />
                <FullPost />
            </SectionProvider>
        </div>
    );
};

export default AuthPageRoute;