"use client";
import Button from "@/app/_lib/components/Button";
import TextInput from "@/app/_lib/components/TextInput";
import { loginReducer } from "@/app/_lib/reducer/admin/LoginReducer";
import { loginAdmin } from "@/app/_lib/services/Admin.service";
import { useRouter } from "next/navigation";

import { KEY, insertStorage } from "@/app/_lib/utils/storage.utils";
import Link from "next/link";
import { useReducer } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const [loginState, dispatch] = useReducer(loginReducer, {
    username: "",
    password: "",
  });

  function redirectToHome() {
    router.push("/");
  }

  async function handleSubmit() {
    try {
      const { username, password } = loginState;
      if (!username) {
        toast.error("Username is required");
        return;
      }

      if (!password) {
        toast.error("Password is required");
        return;
      }
      toast.loading("Please wait...");
      const resp = await loginAdmin(loginState);
      toast.dismiss();
      if (!resp) {
        toast.error("Account not found");
        return;
      }

      console.log("response", resp);

      insertStorage(KEY.ACCOUNT, resp);
      toast.success("Successfully Login", {
        onClose: () => redirectToHome(),
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
    }
  }

  return (
    <div className=" flex flex-1 w-full h-full  justify-center items-center">
      <div className=" w-3/4 shadow-lg p-8">
        <h1 className=" text-red-500 text-2xl font-bold">Sign In</h1>
        <div className=" h-10" />
        <TextInput
          type="text"
          name="username"
          label={"Username"}
          onChange={(e) =>
            dispatch({ type: e.target.name, [e.target.name]: e.target.value })
          }
          value={loginState.username}
        />
        <div className=" h-5" />
        <TextInput
          type="password"
          name="password"
          label="Password"
          value={loginState.password}
          onChange={(e) =>
            dispatch({ type: e.target.name, [e.target.name]: e.target.value })
          }
        />
        <div className=" mt-8 w-full" />
        <Button text={"Sign In"} onClick={handleSubmit} />
        <p className=" mt-8 text-sm text-center text-red-600 hover:text-red-400">
          <Link href={"/"}>Back To Home</Link>
        </p>
      </div>
    </div>
  );
}
