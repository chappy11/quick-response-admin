"use client";;
import Button from "@/app/_lib/components/Button";
import TextInput from "@/app/_lib/components/TextInput";
import Link from "next/link";
import { toast } from 'react-toastify';
export default function Login() {

    function handleSubmit(){
        toast('🦄 Error Login',{type:'error'});
    }

    return (
    <div className=" flex flex-1 w-full h-full  justify-center items-center">
        <div className=" w-3/4 shadow-lg p-8">
            <h1 className=" text-red-500 text-2xl font-bold">Sign In</h1>
            <div className=" h-10"/>
            <TextInput type="text" label={"Email"}/>
            <div className=" h-5"/>
            <TextInput type="password" label="Password" />
            <div className=" mt-8 w-full"/>
                <Button  text={"Sign In"} onClick={handleSubmit} />
                <p className=" mt-8 text-sm text-center text-red-600 hover:text-red-400">
                    <Link href={'/'} >
                        Back To Home
                    </Link>
                </p>
            </div>
           
    </div>
  )
}
