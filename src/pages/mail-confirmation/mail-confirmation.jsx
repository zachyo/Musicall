import { MailCheck } from "lucide-react";
import React from "react";
import useMusicallStore from "../../store/musicallStore";

export const MailConfirmation = () => {
  const userLoggedIn = useMusicallStore((state) => state.userLoggedIn);
  const isVerified = useMusicallStore((state) => state.isVerified);
  return (
    <div className="text-white flex items-center flex-col justify-center h-full mt-10">
      <MailCheck size={70} />
      <h1 className="text-4xl mt-4 text-sandy font-semibold"> Email Verification</h1>
      <p className="mt-4 w-1/3">
      {userLoggedIn && !isVerified && 'You are yet to be a verified user. '}
        We have sent an email to <span className="text-sandy">zacheazy99@gmail.com</span> to verify the validity of your email
        address. After receiving the mail follow the link provided to verify
        your account.
      </p>
      <span className="bg-sandy h-0.5 w-1/3 mt-12"></span>
      <p className="mt-2 text-blue-400 hover:underline cursor-pointer">Resend verification mail</p>
    </div>
  );
};
