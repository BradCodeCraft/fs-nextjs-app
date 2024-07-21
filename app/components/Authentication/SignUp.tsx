"use client";
import React, { useState } from "react";
import { LandingPageProps } from "../../page";
import { PiIdentificationBadge } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export default function SignUp(props: LandingPageProps) {
  const { setHasAccount } = props;
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
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
            <PiIdentificationBadge />
          </div>
          <div className="w-[1px] h-5 my-auto border border-black" />
          <input
            className="text-xl rounded-md py-2 px-5 w-full bg-transparent focus:outline-none"
            name="firstName"
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="flex w-full bg-slate-300 mb-2.5 rounded-md">
          <div className="min-h-full px-5 flex items-center text-2xl">
            <PiIdentificationBadge />
          </div>
          <div className="w-[1px] h-5 my-auto border border-black" />
          <input
            className="text-xl rounded-md py-2 px-5 w-full bg-transparent focus:outline-none"
            name="lastName"
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

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
          <button onClick={() => setHasAccount(true)}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Already have an account? Sign In
          </button>
        </div>

        <button className="bg-slate-100 rounded-xl text-xl py-1 mt-5">
          Sign Up
        </button>
      </form>
    </div>
  );
}
