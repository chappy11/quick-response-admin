'use client'

import { InputHTMLAttributes, useMemo, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    label:string
}


export default function TextInput(props:InputProps) {
    const {label,type} = props;
    const [isShowPassword,setIsShowPassword] = useState<boolean>(false);

    const displayShowPassword = useMemo(()=>{
        if(type === 'password'){
            return (<p className=' text-right font-sm'>
                        <input 
                            type='checkbox' 
                            checked={isShowPassword}  
                            onChange={(e)=>setIsShowPassword(e.target.checked)} 
                            className=' pr-4'/> 
                            <span className=' mr-4'>Show Password</span> 
                    </p>)
        } 
    },[isShowPassword, type])
  
    const newTypes = useMemo(()=>{
        if(type === 'password'){
            if(isShowPassword){
                return 'text';
            }

            return 'password'
        }

        return type;
    },[isShowPassword, type])
  
    return (
        <>
        <div className="form my-2">
            <input required autoComplete='off' {...props} type={newTypes}/>
            <label htmlFor="text" className="label-name">
            <span className="content-name">
                {label}
            </span>
            </label>
      </div>
      {displayShowPassword}
      </>
  )
}