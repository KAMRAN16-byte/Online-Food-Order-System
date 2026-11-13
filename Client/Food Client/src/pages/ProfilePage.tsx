import assets from '../assets/assets.tsx'
import type {UserProfile} from "../types/User.ts";
import Config from "../configs/Config.ts";
import {userProfile, userUpdateProfile} from "../services/UserService.ts";
import type {APIResponse} from "../types/API.ts";
import {useEffect, useState} from "react";
import type {AxiosResponse} from "axios";
import {toast} from "react-toastify";

const ProfilePage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");
    const fetch_data = async () => {
        const token = window.sessionStorage.getItem(Config.TOKEN)
        try {
            const user: APIResponse<UserProfile> = (await userProfile(token)).data
            if (user.status) {
                setName(user.data.name)
                setEmail(user.data.email)
                setMobile(user.data.mobile)
            }
        } catch (err) {
            console.log(err)
        }

    }


    const HandleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response: AxiosResponse<APIResponse<any>> = await userUpdateProfile(window.sessionStorage.getItem(Config.TOKEN), {mobile})
            if(response.data.status === 'success') {
                toast.success('Profile updated successfully! :)')
            }
        } catch (err) {
            console.log(err)
        }


    }

    useEffect(() => {
        fetch_data()
    }, [])

    return (
        <div className={'h-full flex flex-col w-full justify-center items-center'}>
            <div
                className={'relative w-4/6 h-5/6 border flex flex-col border-red-300/50 rounded-3xl overflow-hidden'}>
                <div className={'absolute w-full h-full'}>
                    <img className={'h-full w-full'} src={assets.profile_background} alt={'bg-image'}/>
                </div>
                <div className={'w-full h-full flex flex-col  backdrop-blur-md pt-3 px-3 pb-10'}>
                    <form onSubmit={HandleUpdate} className={'w-full h-full flex flex-col'}>
                        <div className={'w-full flex-1 bg-black rounded-3xl flex flex-col p-4 mb-5 px-10 '}>
                            <div className={'w-full flex gap-10 justify-center'}>
                                <div className={'w-1/2'}>
                                    <fieldset className="fieldset">
                                        <label className="label" htmlFor="name">Name</label>
                                        <input type="text" id="name" className="input w-full" disabled={true}
                                               placeholder={"Name"} value={name}/>
                                    </fieldset>
                                </div>
                                <div className={'w-1/2'}>
                                    <fieldset className="fieldset ">
                                        <label className="label" htmlFor="email">Email</label>
                                        <input type="email" id="email" className="input w-full" disabled={true}
                                               value={email} placeholder={"Email"}/>
                                    </fieldset>
                                </div>
                            </div>
                            <div className={'w-full flex gap-10 justify-center'}>
                                <div className={'w-full'}>
                                    <fieldset className="fieldset">
                                        <label className="label" htmlFor="mobile">Mobile</label>
                                        <input type="tel" id="mobile" className="input w-full" maxLength={10}
                                               minLength={10} value={mobile} placeholder={'Mobile'} onChange={e => {
                                            setMobile(e.target.value)
                                        }} required/>
                                    </fieldset>
                                </div>
                            </div>

                        </div>
                        <div className={'flex w-full justify-center'}>
                            <button type={'submit'} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Update</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;