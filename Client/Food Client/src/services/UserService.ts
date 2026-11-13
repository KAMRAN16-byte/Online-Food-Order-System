import type {UserProfile, UserSignin, UserSignup} from "../types/User.ts";
import type {APIResponse} from "../types/API.ts";
import Config from "../configs/Config.ts";
import axios, {type AxiosResponse} from "axios";


export function userSignup(body: UserSignup): Promise<AxiosResponse<APIResponse<any>>> {
    return axios.post(Config.BASE_URL + "/user/signup", body)
}

export function userSignin(body: { email: string, password: string }): Promise<AxiosResponse<APIResponse<UserSignin>>> {
    return axios.post(Config.BASE_URL + "/user/signin", body)
}

export function userProfile(token: string): Promise<AxiosResponse<APIResponse<UserProfile>>> {
    const headers = {token}
    return axios.get(Config.BASE_URL + "/user", {headers})
}

export function userUpdateProfile(token: string,body:{ mobile: string }): Promise<AxiosResponse<APIResponse<any>>> {
    const headers = {token}
    return axios.put(Config.BASE_URL + "/user", body, {headers})
}