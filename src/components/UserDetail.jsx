import React, { useContext } from 'react';
import { UserContext } from '../Context.jsx';
import {useNavigate, useParams} from 'react-router-dom';

const UserDetail = () => {
    const { users } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center">
            {/* User Detail Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Name: <span className="font-normal text-gray-600">{users[id].username}</span>
                </h1>
                <h3 className="text-lg text-gray-700">
                    City: <span className="font-medium text-gray-600">{users[id].city}</span>
                </h3>
                <button onClick={()=>navigate("/user")} className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300">
                    Close</button>
            </div>
        </div>
    );
};

export default UserDetail;
