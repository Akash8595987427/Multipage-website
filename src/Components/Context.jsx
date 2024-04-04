


import React, {useContext, useReducer} from "react";
import reducer from "./reducer";

const AppContext = React.createContext();


const initialState = {
    name : "",
    image : "",
};



const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);
// This means the component within the AppContext.Provider we can give access to all the application access so we can access it from anywhere and also provide data to it from anywhere 

    const updateHomePage=()=>{
        return dispatch({
        type : "HOME_UPDATE",
        payload : {
            name : "Technical Website",
            image : "hero_img.jpg",
        },
        });
    };


    const updateAboutPage=()=>{
    return dispatch({
        type : "ABOUT_UPDATE",
        payload : {
            name : "Akash Singh Bhandari",
            image : "hero_about_img.jpg"
        }
    })
    }

    const updateServicePage=()=>{
        return dispatch({
            type : "SERVICE_UPDATE",
            payload : {
                
            }
        })
    }

    return (
        <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
          {children}
        </AppContext.Provider>
      );
    };
    
    // gloabal custom hook
    const useGlobalContext = () => {
      return useContext(AppContext);
    };
    
    export { AppProvider, useGlobalContext };
