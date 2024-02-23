import { LoginAdminDto } from "../../types/Admin.type";

export enum LOGIN_ACTIONS {
    USERNAME = 'username',
    PASSWORD = 'password'
}


export function loginReducer(state: LoginAdminDto, action: any) {
    switch (action.type as LOGIN_ACTIONS) {
        case LOGIN_ACTIONS.USERNAME:

            return { ...state, username: action.username }
        case LOGIN_ACTIONS.PASSWORD:

            return { ...state, password: action.password }
        default:
            return state;
    }
}