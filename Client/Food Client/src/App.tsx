import {Navigate, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import SigninPage from "./pages/SigninPage.tsx";
import { ToastContainer} from "react-toastify";
import {createContext, useState} from "react";
import type {LoginStatusContextType} from "./types/Login.ts";
import Config from "./configs/Config.ts";
import OrderPage from "./pages/OrderPage.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

export const LoginStatusContext = createContext<LoginStatusContextType | undefined>(undefined);

function App() {
    const [userLoginStatus, setUserLoginStatus] = useState<boolean>(!!window.sessionStorage.getItem(Config.TOKEN));
    return (
        <div>
            <LoginStatusContext value={{userLoginStatus, setUserLoginStatus}}>
                <ToastContainer/>
                <Routes>
                    <Route path="/*" element={<Navigate to={'/home'}/>} />
                    <Route path="/" element={<SigninPage/>}/>
                    <Route path={'/signup'} element={<SignupPage/>}/>
                    <Route path={'/home'} element={<HomePage/>}>
                        <Route path={''} element={<MenuPage />} />
                        <Route path={'order'} element={<OrderPage/>} />
                        <Route path={'profile'} element={<ProfilePage/>}/>

                    </Route>
                </Routes>
            </LoginStatusContext>

        </div>
    )
}

export default App;