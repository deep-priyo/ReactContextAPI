import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-5">
            <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
            <p className="text-lg text-gray-600">
                This is a simple app that demonstrates using React Context to share data across components without the need for prop drilling. Check out User for more...
            </p>
        </div>
    );
};

export default Home;
