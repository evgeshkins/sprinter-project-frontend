import React from 'react';
import { useParams } from 'react-router-dom';
import FullPost from './components/fullpost';
import Header from "./components/header"
import { SectionProvider } from "./section-context"

const ViewPostRoute = () => {
    const { postId } = useParams();

    return (
        <div className="h-screen w-full">
            <SectionProvider>
                <Header />
                <FullPost postId={postId} />
            </SectionProvider>
        </div>
    );
};

export default ViewPostRoute;