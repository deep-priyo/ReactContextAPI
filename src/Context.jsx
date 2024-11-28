import React, {createContext, useState} from 'react'
export const UserContext=createContext();
const Context = (props) => {
    const [users, setUsers] = useState([{id:0,username:'John',city:"Dublin"},{id:1,username:'Julia',city:'Yorkshire'},{id:2,username:'Dave',city: 'Frankrfut'}]);
    return <UserContext.Provider value={{users,setUsers}}>{props.children}</UserContext.Provider>


}
export default Context
