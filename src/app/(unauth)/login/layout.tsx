import Image from "next/image"

export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className=" flex min-h-screen flex-row">
        <div className=" flex flex-1 flex-col justify-center item-center">
            <h1 className=" text-4xl font-bold text-red-400 ml-40 text-left">Welcome Back</h1>
                <Image src='admin.svg' className=" self-center" width={600} height={600} alt='admin Image'/>
        </div>
        <div className=" flex flex-1 justify-center items-center"> 
            {children}  
        </div>
      </main>
    )
  }