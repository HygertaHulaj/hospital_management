import React from "react";
import Layout from "../../components/dashboard/Layout"
// import withAuth from "@/components/withAuth";
import { BsPersonFill } from "react-icons/bs";
import Header from "../../components/dashboard/Header";
const Dashboard = () => {
  const boxShadowStyle = { boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 80px" };
  // const { user } = useDashboardAuth();
  return (
    <Layout>
      <>

        <main className="min-h-screen font-sans h-full antialiased  bg-[#F8F9FA] ">
          <div className="w-full flex justify-left items-left ">
            <div className="w-full p-6  h-fit">
              <div className="flex flex-wrap items-center  justify-around mb-4">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-5 px-3">
                  <div className="flex items-center justify-between rounded-xl p-4 bg-white shadow-md ">
                    <div className="">
                      <p>Users </p>
                      <h2 className="text-black text-xl font-bold flex items-center">
                        test
                        <span className="text-xs text-green-400 ml-2">
                          {" "}
                          in Total
                        </span>
                      </h2>
                    </div>
                    <div className="px-2 py-2.5 rounded-lg ml-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
                      <BsPersonFill
                        size={20}
                        className="mdi mdi-account-outline mx-1 fa-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-5 px-3">
                  <div className="flex items-center justify-between rounded-xl shadow-md   p-4 bg-white">
                    <div className="">
                      <p>Users </p>
                      <h2 className="text-black text-xl font-bold flex items-center">
                        test
                        <span className="text-xs text-green-400 ml-2">
                          {" "}
                          in Total
                        </span>
                      </h2>
                    </div>
                    <div className="px-2 py-2.5 rounded-lg ml-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
                      <BsPersonFill
                        size={20}
                        className="mdi mdi-account-outline mx-1 fa-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
  
    </Layout>
  );
};

export default Dashboard;
