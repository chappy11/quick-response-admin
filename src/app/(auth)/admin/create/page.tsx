'use client';
import Button from '@/app/_lib/components/Button';
import TextHeader from '@/app/_lib/components/TextHeader'
import TextInput from '@/app/_lib/components/TextInput'
import { NameDto } from '@/app/_lib/types/Admin.type'
import React, { InputHTMLAttributes, useState } from 'react'

export default function CreateAdminPage() {
    const [name,setName] = useState<NameDto>({
        firstname:'',
        middlename:'',
        lastname:''
    });

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setName({...name,[e.target.name]:value});
    }

    
    return (
    <div className=' w-full h-full flex justify-center'>
        <div className=' w-1/2 shadow-md p-5'>
            <TextHeader text='Add New Admin'/>
            <div className=' h-3'/>
            <TextInput label='Firstname' name='firstname' onChange={handleChangeName} value={name.firstname}/>
            <div className=' h-2'/>
            <TextInput label='Middlename' name='middlename' onChange={handleChangeName} value={name.middlename}/>
            <div className=' h-3'/>
            <TextInput label='Lastname' name='lastname' onChange={handleChangeName} value={name.lastname}/>
            <div className=' h-3'/>
            <TextInput label='Email'/>
            <div className=' h-3'/>
            <TextInput label='Mobile Number'/>
            <div className=' mt-7 w-full flex justify-end'>
                <Button text='Submit' onClick={()=>{}}/>
            </div>
            
        </div>
       <div>

       </div>

    </div>
  )
}
