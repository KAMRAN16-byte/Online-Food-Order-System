import AuthenticationBg from "../components/Authentication-bg.tsx";
import {useState} from "react";
import {userSignup} from "../services/UserService.ts";
import {useNavigate} from "react-router";




function SignupPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();

    const HandleSubmit = async (e) => {
        e.preventDefault();


        try{
            const response = await userSignup({name,email,password,mobile})
            e.target.reset();
            if(response.data.status === "success")
            {
                navigate("/signin")
            }
            else
            {

            }
        }
        catch(err){
            console.log("Error: ", err)
        }
    }

    return (
        <div className={'relative h-screen w-full '}>

            <AuthenticationBg/>

            <div className={'relative z-10 h-full w-full border-gray-50 flex flex-col justify-center items-center'}>
                <div
                    className={'w-1/2 xl:w-1/4 p-5 border border-gray-50/20 flex flex-col  justify-center items-center bg-black/60  backdrop-blur-sm rounded-lg'}>
                    <form onSubmit={HandleSubmit} className={'w-full flex flex-col  justify-center items-center gap-3'}>

                        <div className={'font-bold text-2xl text-white/80 mb-5'}>
                            <h1>
                                Welcome to Kam_Cook
                            </h1>
                        </div>
                        {/*Name*/}
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
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="text"
                                    id={'Name'}
                                    required
                                    placeholder="Username"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength={3}
                                    maxLength={30}
                                    title="Only letters, numbers or dash"
                                    onChange={e => setName(e.target.value)}
                                />
                            </label>
                            <p className="validator-hint hidden">
                                Must be 3 to 30 characters
                                <br/>containing only letters, numbers or dash
                            </p>
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
                                <input type="email" id={'Email'} placeholder="mail@site.com" required onChange={e => setEmail(e.target.value)} />
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
                        {/*Phone*/}
                        <div className={'w-full flex flex-col justify-center items-center'}>
                            <label className="input validator w-3/4">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 16 16">
                                    <g fill="none">
                                        <path
                                            d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                                            fill="currentColor"
                                        ></path>
                                    </g>
                                </svg>
                                <input
                                    type="tel"
                                    className="tabular-nums"
                                    required
                                    id={'Phone'}
                                    placeholder="Phone"
                                    pattern="[0-9]*"
                                    minLength={10}
                                    maxLength={10}
                                    onChange={e => setMobile(e.target.value)}
                                    title="Must be 10 digits"
                                />
                            </label>
                            <p className="validator-hint hidden">Must be 10 digits</p>
                        </div>
                        {/*Submit Button*/}
                        <div className={'w-full flex flex-col justify-center items-center'}>
                            <div className="aura">
                                <button className="btn" type={"submit"}>Register</button>
                            </div>
                        </div>
                    </form>

                    <div className={'text-sm flex items-center justify-center gap-1 mt-5'}>

                        <p>Already Have an Account? <div className={'aura text-orange-600 aura-xs'}><a className={'bg-black/80 border border-gray-50/20 rounded-sm'}>Click Here</a></div> to Sign In</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignupPage;