import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../services/storage"

interface IAppContext {
    userName: string,
    userId: string,
    isLoggedIn: boolean,
    setItemState: (item: string, setItem: any) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [state, setState] = useState({
        isLoggedIn: false,
        userName: '',
        userId: ''
    })
    const logged = getLocalStorage('isLoggedIn')
    useEffect(() => {
        if(logged) {
            setState({
                ...state,
                isLoggedIn: JSON.parse(logged),
                userName: getLocalStorage('userName') || '',
                userId: getLocalStorage('userId') || ''
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
      <AppContext.Provider value={{userName: state.userName, isLoggedIn: state.isLoggedIn, setItemState, userId: state.userId }}>
        { children }
      </AppContext.Provider>
    )
}

export {}