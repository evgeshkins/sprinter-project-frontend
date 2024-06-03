import React from 'react';
import CreatePost from './components/createpost';
import Header from "./components/header"
import { SectionProvider } from "./section-context"

const AuthPageRoute = () => {
    return (
        <div className="h-screen w-full">
            <SectionProvider>
                <Header />
                <CreatePost />
            </SectionProvider>
        </div>
    );
};

export default AuthPageRoute;