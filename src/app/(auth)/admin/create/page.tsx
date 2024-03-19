"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormData = {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  mobileNumber: string;
};

const schema = z.object({
  firstname: z.string().nonempty(),
  middlename: z.string().nonempty(),
  lastname: z.string().nonempty(),
  email: z.string().email(),
  mobileNumber: z.string().min(10),
});

const CreatePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div>
      <h1>Create Page</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" {...register("firstname")} />
          {errors.firstname && <span>{errors.firstname.message}</span>}
        </div>
        <div>
          <label>Middle Name:</label>
          <input type="text" {...register("middlename")} />
          {errors.middlename && <span>{errors.middlename.message}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" {...register("lastname")} />
          {errors.lastname && <span>{errors.lastname.message}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="text" {...register("mobileNumber")} />
          {errors.mobileNumber && <span>{errors.mobileNumber.message}</span>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
