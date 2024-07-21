"use client";
import { useState } from "react";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";

export interface LandingPageProps {
  setHasAccount: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function LandingPage() {
  const [hasAccount, setHasAccount] = useState<Boolean>(true);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-full min-h-screen fixed -z-50" />
      {hasAccount ? (
        <SignIn setHasAccount={setHasAccount} />
      ) : (
        <SignUp setHasAccount={setHasAccount} />
      )}
    </div>
  );
}
