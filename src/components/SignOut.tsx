"use client";

import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button type="button" onClick={() => signOut()}>
      SignOut
    </button>
  );
};

export default SignOut;
