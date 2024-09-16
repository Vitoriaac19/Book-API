import React, {useState, useEffect, useContext} from "react"

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    
    const [authUser, setAuthUser] = useState(null);
    const[isLogged, setIsLogged] = useState(false);

    const value = {
        authUser,
        setAuthUser,
        isLogged,
        setIsLogged
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}