import SignOut from "@/components/SignOut";
import Image from "next/image";
import React from "react";
import { authOptions } from "../lib/nextAuth";
import { getServerSession } from "next-auth";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
        <h1>user info</h1>
      {session && (
        <div>
          <h1>Welcom {session.user?.name}</h1>
          <Image
            src={session.user?.image as string}
            alt="user image"
            width={100}
            height={100}
          />
          <p>{session.user?.email}</p>
          <SignOut />
        </div>
      )}
    </div>
  );
};

export default Profile;
