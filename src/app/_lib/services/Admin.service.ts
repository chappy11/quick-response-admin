import { httpInstance } from "../constant/instance";

export const adminLogin = async<LoginAdminDto>(payload: LoginAdminDto) => {
    const resp = await httpInstance.post('/admin/login', payload);

    return resp.data.data;
}