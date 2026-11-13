export interface UserProfile {
    name: string
    email: string
    mobile: string
}

export interface UserSignup extends UserProfile{

    password: string
}

export interface UserSignin extends UserProfile{
    token: string
}
