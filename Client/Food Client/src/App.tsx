import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import SigninPage from "./pages/SigninPage.tsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path={'/signup'} element={<SignupPage/>}/>
                <Route path={'/signin'} element={<SigninPage/>}/>
            </Routes>
        </div>
    )
}

export default App;