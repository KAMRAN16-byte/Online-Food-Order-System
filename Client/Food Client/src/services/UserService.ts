import type {UserSignin, UserSignup} from "../types/User.ts";
import type {APIResponse} from "../types/API.ts";
import Config from "../configs/Config.ts";
import axios, {type AxiosResponse} from "axios";


export function userSignup(body: UserSignup): Promise<AxiosResponse<APIResponse<any>>> {
    return axios.post(Config.BASE_URL + "/user/signup", body)
}

export function userSignin(body : {email: string, password: string}) : Promise<AxiosResponse<APIResponse<UserSignin>>> {
    return axios.post(Config.BASE_URL + "/user/signin", body)
}