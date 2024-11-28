import React, { useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { UserContext } from '../Context.jsx';

const User = () => {
    const { users } = useContext(UserContext);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-8">User List</h1>

            {/* User List */}
            <div className="w-full max-w-md flex flex-col gap-4">
                {users.map((u) => (
                    <Link
                        key={u.id}
                        to={`/user/${u.id}`}
                        className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 border border-gray-200"
                    >
                        <p className="text-lg font-medium text-gray-700">{u.username}</p>
                    </Link>
                ))}
                <Outlet/>
            </div>
        </div>
    );
};

export default User;
