import { createContext ,useState} from "react";

export const Context = createContext();

export function ContextProvider({children}){
    const [data,setData] = useState("hello kiran");
   

    return(
        <Context.Provider value={{data,setData}}>
            {children}
        </Context.Provider>
    )
}