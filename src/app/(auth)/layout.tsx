import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex flex-row">
      <div className=" w-1/5 h-screen text-white bg-red-600 p-3">
        <div className=" w-full ">
          <nav>
            <ul className=" w-full">
              <Link href={"/dashboard"}>
                <li className=" hover:bg-red-800 w-full cursor-pointer p-3 text-sm">
                  Dashboard
                </li>
              </Link>
              <Link href={"/user"}>
                <li className=" hover:bg-red-800 w-full cursor-pointer p-3 text-sm">
                  Users
                </li>
              </Link>
              <li className=" hover:bg-red-800 w-full cursor-pointer p-3 text-sm">
                Admins
              </li>
              <li className=" hover:bg-red-800 w-full cursor-pointer p-3 text-sm">
                Responder
              </li>
              <li className=" hover:bg-red-800 w-full cursor-pointer p-3 text-sm">
                Logout
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className=" w-full">
        <div className=" h-16 flex items-center bg-red-100">
          <p className="  p-2 font-bold text-lg text-red-600">
            Quick Response Admin
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
