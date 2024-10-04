import {createContext, useState} from "react";

export const MyContext = createContext();
const MyContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState({username:'',password:''});
    const [searchResults, setSearchResults] = useState([]);
    return (
        <MyContext.Provider value={{currentUser,setCurrentUser,searchResults, setSearchResults}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyContextProvider