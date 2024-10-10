"use client";

import { signIn } from "next-auth/react";

const SigninWithGoogle = () => {
  return (
    <button type="button" onClick={() => signIn("google")}>
      Sign In with Google
    </button>
  );
};

export default SigninWithGoogle;
