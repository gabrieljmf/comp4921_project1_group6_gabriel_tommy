import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function admin() {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/admin");
    },
  });

  if (!session?.user) return;
  return <div>Welcome to OnlyAdmins</div>;
}
