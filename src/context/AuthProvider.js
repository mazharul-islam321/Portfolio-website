import React, { createContext } from "react";
import useProjects from "../hooks/useProjects";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const allProjects = useProjects();
    // console.log("hh" + allProjects);
    return (
        <authContext.Provider value={allProjects}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
