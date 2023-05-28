import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDashboardAuth } from "../../../context/DashboardAuthContext";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
const Login = () => {
  // const { login, isAuthenticated } = useDashboardAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // const authenticated = isAuthenticated();
    // if (authenticated) {
    //   router.push("/dashboard/dashboard");
    // }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F8F8] px-4">
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
          <div className="w-full md:w-3/5 p-5">
            <h2 className="text-3xl font-bold text-black mt-9">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-black inline-block mb-2"></div>

            <div className="text-gray-400 my-3">
              Use your email account to sign in
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2 bg-gray-100 p-2 flex items-center">
                  <FaRegEnvelope className="text-gray-400 m-2 " />
                  <input
                    className="bg-gray-100 p-2 text-sm outline-none flex-1"
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2 bg-gray-100 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2 " />
                  <input
                    className="bg-gray-100 p-2 text-sm outline-none flex-1"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="border-2 border-[#a93258] rounded-full inline-block font-semibold hover:bg-[#a93258] hover:text-white text-[#a93258] py-2 w-1/4"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>

          <div className="bg-[#F8F9FA] w-full md:w-2/5 text-black rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl py-9 px-12">
            <div className="flex justify-center font-bold">
              <Image src="/insi.png" alt="Logo" width={400} height={500} />
            </div>

            <div className="border-2 w-10 border-[#a93258] inline-block mb-2"></div>
            <p className="mb-2">
              Welcome to our app, feel free to contact us on social media
            </p>
            <div className="flex justify-center my-2">
              <Link
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
