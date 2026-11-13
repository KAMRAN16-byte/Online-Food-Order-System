import Menubar from "../components/Menubar.tsx";
import {useContext, useEffect} from "react";
import {LoginStatusContext} from "../App.tsx";
import {toast} from "react-toastify";
import {Outlet, useNavigate} from "react-router";

function HomePage() {
    const  {userLoginStatus} = useContext(LoginStatusContext)
    console.log(userLoginStatus)
    const navigate = useNavigate();
    const onLoad = ()=>{
        if(!userLoginStatus)
        {
            toast.info("Please sign in")
            navigate("/")
        }
    }

    useEffect(() => {
        onLoad()
    },[])
    return (
        <div className={'h-screen w-full flex flex-col'}>
            <Menubar/>
            <Outlet/>
        </div>
    )
}

export default HomePage;