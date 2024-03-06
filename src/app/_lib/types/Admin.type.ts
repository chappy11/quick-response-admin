export type LoginAdminDto = {
    username: string;
    password: string;
}

export interface AdminDto  {
    id?:string;
    username:string;
    password:string;
    name:NameDto
    email:string;
    mobileNumber:string;
    adminType:AdminType
    dateCreated:string; 
}

export interface NameDto {
    firstname:string;
    middlename?:string;
    lastname:string;
}

export enum AdminType{
    SUPER='SUPERADMIN',
    ADMIN='ADMIN'
}