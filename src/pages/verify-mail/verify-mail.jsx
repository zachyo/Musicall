import React, { useEffect } from "react";
import Spinner from "../../components/spinner/spinner.component";
import { useNavigate, useSearchParams } from "react-router-dom";
import { notifyError, notifySuccess } from "../../utilities/utils";

export const VerifyMail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `https://marco-pzbx.onrender.com/api/v1/auth/verify-email?token=${token}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();

        if (response.status === 200) {
          notifySuccess(data?.message);
        } else {
          notifyError(data.message);
        }

        navigate("/signin");
      } catch (error) {
        console.log(error);
      }
    };

    verifyEmail();
  }, [token, navigate]);
  return (
    <div className="h-screen flex items-center justify-center w-screen relative">
      <p className="absolute top-[43%] left-1/2 -translate-x-1/2 text-white">
        Confirming Email Address
      </p>
      <Spinner />
    </div>
  );
};
