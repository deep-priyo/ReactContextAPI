import React from 'react';
import Home from './components/Home.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import UserDetail from './components/UserDetail.jsx';
import User from './components/User.jsx';
import About from './components/About.jsx';

const App = () => {
    return (
        <div className="h-screen bg-gray-100 flex flex-col">
            {/* Navbar */}
            <nav className="px-4 py-3 bg-white shadow-md flex items-center justify-center gap-8">
                <Link
                    className="text-gray-700 font-medium hover:text-blue-500 transition-colors duration-300"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="text-gray-700 font-medium hover:text-blue-500 transition-colors duration-300"
                    to="/user"
                >
                    User
                </Link>
                <Link
                    className="text-gray-700 font-medium hover:text-blue-500 transition-colors duration-300"
                    to="/about"
                >
                    About
                </Link>
            </nav>

            {/* Routes */}
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} >
                        <Route path="/user/:id" element={<UserDetail />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
