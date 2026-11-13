import  {type SetStateAction} from "react";
import React from "react";

export type LoginStatusContextType = { userLoginStatus: boolean, setUserLoginStatus: React.Dispatch<SetStateAction<boolean>>}
