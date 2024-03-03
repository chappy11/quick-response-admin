import {DocumentData, doc,addDoc, setDoc, collection} from 'firebase/firestore';
import { db } from "../config/firebaseConfig";
import { FirestoreDb } from '../constant/firebaseDb';

export const addCollection = async <FirestoreDb,T>(dbCollection:FirestoreDb,payload:T)=>{
    const response = await addDoc(collection(db,dbCollection as string),payload as DocumentData);

    return response
}