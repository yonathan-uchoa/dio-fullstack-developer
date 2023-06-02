import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Account from "./pages/Account"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"

const MainRoutes = () => {
    const { isLoggedIn, userId } = useContext(AppContext)
    return(
        <Routes>
            <Route path='/' element={ isLoggedIn ? <Navigate to={`/conta/${userId}`} />: <Home /> } />
            <Route path= '/conta/:id' element={ isLoggedIn ? <Account /> : <Navigate to={"/"}/> } />
        </ Routes>
    )
}

export default MainRoutes