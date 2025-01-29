import React, { useState, createContext } from "react";

import ComponentB from "./ComponentB";

export const UserContext = createContext(); // Using context we can avoid prop drilling

function ComponentA() {

    const [user, setUser] = useState("Ali AbdurRaheem");

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
            
        </div>
    );
}

export default ComponentA;