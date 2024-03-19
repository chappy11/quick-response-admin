'use client';;
import Button from '@/app/_lib/components/Button';
import TextHeader from '@/app/_lib/components/TextHeader';
import { NavRoutes } from '@/app/_lib/constant/route';
import { useRouter } from 'next/navigation';


export default function AdminPage() {
    const router = useRouter();
 
    function handleAddAdmin(){
        router.push(NavRoutes.ADMIN_CREATE.toString())
 }
  return (
    <div className=' w-full flex'>
        <div className=' p-3'>
        <TextHeader text='Admin Page'/>
        </div>
        <div className=' flex flex-1 justify-end'>
            <Button text={"Add Admins"} onClick={() => handleAddAdmin()} type={undefined}/>
        </div>
        
    </div>
  )
}
