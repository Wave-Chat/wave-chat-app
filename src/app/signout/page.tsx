import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div>
      <h1>Sign out</h1>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
    </div>
  );
}
