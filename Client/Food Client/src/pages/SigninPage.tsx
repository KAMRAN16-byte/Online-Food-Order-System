import AuthenticationBg from "../components/Authentication-bg.tsx";
import {useState} from "react";
import {userSignin} from "../services/UserService.ts";
import type {UserSignin} from "../types/User.ts";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

function SigninPage() {
    const HandleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await userSignin({email, password})
            if (response.data.status === 'success') {
                setTimeout(()=>{
                    navigate("/home")
                },2000)
                toast.success("Sign in successfully! :)");
                const user :  UserSignin = response.data.data;
                console.log(user);

            }
            else
            {
                toast.error("Sign in failed! :(");
                console.log(response.data.error)
            }
        } catch (e) {
            console.log(e);
        }

    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className={'relative h-screen w-full '}>

            <AuthenticationBg/>

            <div className={'relative z-10 h-full w-full border-gray-50 flex flex-col justify-center items-center'}>
                <div
                    className={'w-3/4 sm:w-1/2 xl:w-1/4 p-5 border border-gray-50/20 flex flex-col  justify-center items-center bg-black/60  backdrop-blur-sm rounded-lg'}>
                    <form onSubmit={HandleSubmit} className={'w-full flex flex-col  justify-center items-center gap-3'}>

                        <div className={'font-bold text-2xl text-white/80 mb-5'}>
                            <h1>
                                Welcome to Kam_Cook
                            </h1>
                        </div>
                        {/*Email*/}
                        <div className={'w-full flex flex-col justify-center items-center'}>
                            <label className="input validator w-3/4">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" id={'Email'} placeholder="mail@site.com" required
                                       onChange={e => setEmail(e.target.value)}/>
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        {/*Password*/}
                        <div className={'w-full flex flex-col justify-center items-center'}>
                            <label className="input validator w-3/4">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                        ></path>
                                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="password"
                                    required
                                    id={'Password'}
                                    placeholder="Password"
                                    minLength={8}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </label>
                            <p className="validator-hint hidden">
                                Must be more than 8 characters, including
                                <br/>At least one number <br/>At least one lowercase letter <br/>At least one uppercase
                                letter
                            </p>
                        </div>
                        {/*Submit Button*/}
                        <div className={'w-full flex flex-col justify-center items-center'}>
                            <div className="aura">
                                <button id={'submit'} className="btn" type={"submit"}>Register</button>
                            </div>
                        </div>
                    </form>

                    <div className={'text-sm flex items-center justify-center gap-1 mt-5'}>

                        <p>Already Have an Account? <div className={'aura text-orange-600 aura-xs'}><a
                            className={'bg-black/80 border border-gray-50/20 rounded-sm'}>Click Here</a></div> to Sign
                            In
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SigninPage;