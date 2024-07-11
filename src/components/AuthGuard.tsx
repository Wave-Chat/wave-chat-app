import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useState } from "react";



import { GET_ME } from "@/http/user";
import Login from "./Login";
import Register from "./Register";

type AuthGuardProps<T extends object = {}> = {
  render: React.FC<{ user: { __typename?: 'User', id: string, name: string, email: string, createdAt: any }} & T>;
  props?: T;
};

export const AuthGuard = <T extends object>({ render: InnerComponent, props }: Readonly<AuthGuardProps<T>>) => {
  const { data: me, loading } = useQuery(GET_ME);

  const [showSignUp, setShowSignUp] = useState(false);

  if (loading) return null;
  

  if (!me) {
    return (
  <div className="">
                 <div className={` flex justify-center lg:block overflow-hidden ${
        showSignUp
          ? "bg-secondary"
          : "bg-primary"
      }`}>
          <Image
            src="/splash.png"
            alt="Image"
            width="1920"
            height="1080"
            className=" h-20 w-20 object-cover "
          />
       
        </div>
            {showSignUp ? (
              <Login setShowSignUp={() => setShowSignUp(false)} />
            ) : (
              <Register setShowSignUp={() => setShowSignUp(true)} />
            )}
          
      

      </div>
    );
  }

  return <InnerComponent user={me.getMe} {...(props as T)} />;
};