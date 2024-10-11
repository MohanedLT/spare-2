"use client";

import { signIn } from "next-auth/react";

const SigninWithGoogle = () => {
  return (
    <button
      type="button"
      onClick={() => signIn("google", { redirect: true, callbackUrl: "/profile" })} // Replace with your callback URL
    >
      Sign In with Google
    </button>
  );
};

export default SigninWithGoogle;
