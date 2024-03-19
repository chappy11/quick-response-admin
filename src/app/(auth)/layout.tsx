"use client";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { NavRoutes, Routes } from "../_lib/constant/route";
import { AdminDto, AdminType } from "../_lib/types/Admin.type";
import { Route } from "../_lib/types/Route.type";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [users, setUsers] = useState<AdminDto | null>(null);
  const pathname = usePathname();

  async function getUsers() {
    try {
      const users = await axios.get("/api/user");
      if (!users?.data) {
        return;
      }
      setUsers(users?.data?.data);
    } catch (error) {
      toast.error("Authentication Failed", {
        onClose: () => (window.location.href = NavRoutes.LOGIN),
      });
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const displayAdminRoute = useMemo(() => {
    if (!users) {
      return;
    }

    if (users.adminType === AdminType.SUPER) {
      return (
        <Link href={NavRoutes.ADMIN}>
          <li
            className={` hover:bg-red-800 w-full cursor-pointer p-3 text-sm ${
              pathname.search(NavRoutes.ADMIN) >= 0 ? "bg-red-800" : ""
            }`}
          >
            Admins
          </li>
        </Link>
      );
    }
  }, [users, pathname]);

  const displayRoutes = useMemo(() => {
    return Routes.map((item: Route, index: number) => {
      return (
        <Link href={item.routes} key={index.toString()}>
          <li
            className={` hover:bg-red-800 w-full cursor-pointer p-3 text-sm ${
              item.routes.search(pathname) >= 0 ? "bg-red-800" : ""
            }`}
          >
            {item.name}
          </li>
        </Link>
      );
    });
  }, [Routes, pathname]);

  return (
    <div className=" flex flex-row">
      <div className=" w-1/5 h-screen text-white bg-red-600 p-3">
        <div className=" w-full ">
          <nav>
            <ul className=" w-full">
              <div className=" h-10" />
              {displayRoutes}
              {displayAdminRoute}
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
        <div className=" p-8">{children}</div>
      </div>
    </div>
  );
}
