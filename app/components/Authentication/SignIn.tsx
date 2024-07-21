"use client";
import React, { useState } from "react";
import { LandingPageProps } from "../../page";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignIn(props: LandingPageProps) {
  const { setHasAccount } = props;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-1/3 min-h-80 py-5 px-10">
      <h1 className="text-center text-4xl mb-2.5 text-white">
        Welcome to BradCodeCraft
      </h1>

      <form
        className="flex flex-col py-2 px-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex w-full bg-slate-300 mb-2.5 rounded-md">
          <div className="min-h-full px-5 flex items-center text-2xl">
            <FaRegUser />
          </div>
          <div className="w-[1px] h-5 my-auto border border-black" />
          <input
            className="text-xl rounded-md py-2 px-5 w-full bg-transparent focus:outline-none"
            name="username"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex w-full bg-slate-300 rounded-md">
          <div className="min-h-full px-5 flex items-center text-2xl">
            <RiLockPasswordLine />
          </div>
          <div className="w-[1px] h-5 my-auto border border-black" />
          <input
            className="text-xl rounded-md py-2 px-5 w-full bg-transparent focus:outline-none"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-end text-white">
          <button onClick={() => setHasAccount(false)}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account? Sign Up
          </button>
        </div>

        <button className="bg-slate-100 rounded-xl text-xl py-1 mt-5">
          Log In
        </button>
      </form>
    </div>
  );
}
