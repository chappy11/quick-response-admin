'use client';;
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
export default function Home():React.ReactNode {
  const router = useRouter();
  function handleGoToLogin(){
    router.push("/login")
  }

  return (
    <div className='flex min-h-screen flex-1'>
      <div className='flex flex-1 justify-center  flex-col pl-20'>
        <h1 className=" text-4xl font-bold text-red-500">Quick Response Application</h1>
        <div className=" flex flex-row items-center mt-8">
            <button onClick={handleGoToLogin} className=" px-10 py-3 bg-red-500 rounded-full text-white hover:bg-red-800">
              Sign In
            </button>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
          <Image
            priority
            src="calamity.svg"
            height={600}
            width={600}
            alt="Follow us on Twitter"
        />
      </div>
    </div>
  );
}
