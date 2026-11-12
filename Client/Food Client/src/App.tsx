import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import SigninPage from "./pages/SigninPage.tsx";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<SigninPage/>}/>
                <Route path={'/signup'} element={<SignupPage/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
            </Routes>

        </div>
    )
}

export default App;