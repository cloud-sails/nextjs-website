"use client";
import { useSession } from "next-auth/react";
 
export function Profile() {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user ? (
          <div>
            <p>Logged in as {session.user.name}</p> 
            <p>GitHub ID: {session.user.id}</p> 
            <img 
              src={session.user.image}  
              alt="avatar" 
              className="w-12 h-12 rounded-full"
            />
          </div>
        ) : (
          <p>Not logged in</p>
        )}
    </div>
  );
}

