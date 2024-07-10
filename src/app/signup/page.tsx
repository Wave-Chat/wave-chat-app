"use client";
import { Button } from "@/components/ui/button";
import  Input  from "@/components/ui/input";
import { Backend_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef } from "react";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const register = async () => {
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("User Registered!");
    console.log({ response });
  };
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="m-2 border rounded overflow-hidden shadow">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600">
        Sign up
      </div>
      <div className="p-2 flex flex-col gap-6">
        <Input
          autoComplete="off"
          name="name"
          labelText="Name"
          required
          onChange={(e: { target: { value: string; }; }) => (data.current.name = e.target.value)}
        />
        <Input
          name="email"
          labelText="Email"
          required
          onChange={(e: { target: { value: string; }; }) => (data.current.email = e.target.value)}
        />
        <Input
          name="password"
          labelText="password"
          type="password"
          required
          onChange={(e: { target: { value: string; }; }) => (data.current.password = e.target.value)}
        />
        <div className="flex justify-center items-center gap-2">
          <Button onClick={register}>Submit</Button>
          <Link className="" href={"/"}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;