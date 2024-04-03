// In the context api there is three rule


// create a context 
// provider
// consumer ( Earlier we write the consumer code which is very length but now we use the useContext hook to make it shorter )
import React, {useContext} from "react"

const AppContext = React.createContext();

const AppProvider = ({children})=>{
// This means the component within the AppContext.Provider we can give access to all the application access so we can access it from anywhere and also provide data to it from anywhere 
    return(<AppContext.Provider value = "Akash Singh Bhandari">         
    {children}
    </AppContext.Provider>)
}

// Here we are creating the global custom hook 
const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext};