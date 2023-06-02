import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../services/storage"

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setItemState: (item: string, setItem: any) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [state, setState] = useState({
        isLoggedIn: false,
        user: ''
    })
    const logged = getLocalStorage('isLoggedIn')
    useEffect(() => {
        if(logged) {
            setState({
                ...state,
                isLoggedIn: JSON.parse(logged),
                user: getLocalStorage('userName') || ''
            })
        }
    }, [])

    const setItemState = (item: string, setItem:any) => {
        setState({
            ...state,
            [item]: setItem
        })
    }
  
    return (
      <AppContext.Provider value={{user: state.user, isLoggedIn: state.isLoggedIn, setItemState }}>
        { children }
      </AppContext.Provider>
    )
}

export {}