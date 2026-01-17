"use client"
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import {signIn} from 'next-auth/react'

const SocialLogin = ({callbackUrl}) => {
  
  return (
    <div className="text-center mt-5">
      <Button  onClick={()=>signIn("google",{callbackUrl,})}
      variant="outline" 
      className={"w-full"}>
        <FcGoogle /> Login With Google
      </Button>
    </div>
  );
};

export default SocialLogin;
