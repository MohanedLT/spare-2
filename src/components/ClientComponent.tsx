"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import SigninWithGoogle from "./SigninWithGoogle";
import SignOut from "./SignOut";

const ClientComponent = () => {
  const session = useSession();
  return (
    <div>
      {session.status === "loading" && "Loading..."}
      {session.status === "unauthenticated" && <SigninWithGoogle />}
      {session.status === "authenticated" && (
        <>
          <p>Welcom {session.data?.user?.name}</p>
          <Image
            src={session.data?.user?.image as string}
            alt="user image"
            width={100}
            height={100}
          />
          <p>Email: {session.data?.user?.email}</p>
        </>
      )}
      <SignOut />
    </div>
  );
};

export default ClientComponent;
