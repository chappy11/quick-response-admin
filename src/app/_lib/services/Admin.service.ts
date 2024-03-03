import { FirestoreDb } from "../constant/firebaseDb";
import { httpInstance } from "../constant/instance";
import { AdminDto, AdminType } from "../types/Admin.type";
import { addCollection } from "../utils/firebase.utils";

export const adminLogin = async<LoginAdminDto>(payload: LoginAdminDto) => {
    const resp = await httpInstance.post('/admin/login', payload);

    return resp.data.data;
}


export const createSuperAdmin = async()=>{
    const data:AdminDto= {
        username: 'borgy123',
        password: '1234',
        name: {
            firstname:'Lisandro',
            lastname:'Batiancila'
        },
        email: "borgy123@gmail.com  ",
        mobileNumber: "09064408087",
        adminType:AdminType.SUPER,
        dateCreated: new Date().toString()
    }

    const resp = await addCollection(FirestoreDb.ADMIN,data);
    
    return resp;
}