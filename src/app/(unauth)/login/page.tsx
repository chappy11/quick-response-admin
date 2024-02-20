"use client";;
import Button from "@/app/_lib/components/Button";
import TextInput from "@/app/_lib/components/TextInput";

export default function Login() {
  return (
    <div className=" flex flex-1 w-full h-full  justify-center items-center">
        <div className=" w-3/4 shadow-lg p-8">
            <h1 className=" text-red-500 text-2xl font-bold">Sign In</h1>
            <div className=" h-10"/>
            <TextInput type="text" label={"Email"}/>
            <div className=" h-5"/>
            <TextInput type="password" label="Password" />
            <div className=" mt-8 w-7 h-auto bg-slate-400 "/>
                <Button  text={"Sign In"} onClick={()=>{}} />
            </div>
    </div>
  )
}
