import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { FirestoreDb } from "../constant/firebaseDb";
import { AdminDto, AdminType, LoginAdminDto } from "../types/Admin.type";
import { addCollection } from "../utils/firebase.utils";





export const createSuperAdmin = async () => {
    const data: AdminDto = {
        username: 'borgy123',
        password: '1234',
        name: {
            firstname: 'Lisandro',
            lastname: 'Batiancila'
        },
        email: "borgy123@gmail.com  ",
        mobileNumber: "09064408087",
        adminType: AdminType.SUPER,
        dateCreated: new Date().toString()
    }

    const resp = await addCollection(FirestoreDb.ADMIN, data);

    return resp;
}

export const loginAdmin = async (payload: LoginAdminDto): Promise<AdminDto> => {
    const { username, password } = payload
    const adminRef = collection(db, FirestoreDb.ADMIN)

    const qry = query(adminRef, where('username', '==', username), where('password', '==', password))

    const querySnapshot = await getDocs(qry);

    let arr: AdminDto[] = [];

    querySnapshot.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() } as AdminDto)
    })

    return arr[0];

}