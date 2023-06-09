import React from "react";
import { SiSpeedtest } from "react-icons/si";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {FaUserNurse} from "react-icons/fa"
import {FcDepartment } from "react-icons/fc"
import {FiUsers} from "react-icons/fi"
import {MdBloodtype} from "react-icons/md"
import {BiDonateBlood} from "react-icons/bi"
import {BsFillCalendar2RangeFill} from "react-icons/bs"
import {MdBedroomChild} from "react-icons/md"
import {RiSurgicalMaskLine } from "react-icons/ri"
import {GiNurseFemale} from "react-icons/gi"
import {FaRegHospital} from "react-icons/fa"
import {GiTestTubes} from "react-icons/gi"

const Sidebar = ({ children }) => {
  const [SidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!SidebarOpen);
  };
  return (
    <>
      <div className="flex bg-[#F8F9FA]">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex  items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleSidebar}
        >
          {SidebarOpen ? <AiOutlineClose size={25} /> : <SlMenu size={25} />}
        </button>

      </div>
      <aside>
        <div className=" flex font-sans w-full ">
          <div
            id="default-sidebar"
            className="absolute top-0 h-screen -left-80 z-40 w-80 px-2 bg-white lg:bg-inherit lg:static shadow md:shadow-none"
          >
            <div className="relative menu is-menu-main h-full px-5 ">
              <div className="p-2 py-1 mb-2 border-b">
                <a href="/dashboard/dashboard">
                  <div className="block h-20 p-5 w-auto">
                    <img
                      src="/insi.png"
                      alt="Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                </a>
              </div>
              <a
                href="/dashboard/dashboard"
                className="flex items-center p-2 mb-1 mt-5 rounded-lg  bg-white shadow-lg font-medium"
              >
                <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                  <SiSpeedtest size={20} />
                </div>
                <span className="grow ml-3 text-gray-600">Dashboard</span>
              </a>
         
              <ul className="menu-list text-white">
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/doctors"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg  bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <FaUserNurse className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">Doctors</span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/departments"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg  bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <FcDepartment className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">
                      Departments
                    </span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/patients"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg  bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <FiUsers className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">Users</span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/BloodDonationD "
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg  bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <MdBloodtype className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">BloodDonation </span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/BloodRequestSchema "
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg  bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <BiDonateBlood className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">BloodRequest </span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/appointments"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg  bg-white shadow-lg font-medium"
                  >
                    
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <BsFillCalendar2RangeFill className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">Appointments</span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/Bed"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <MdBedroomChild className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">Bed</span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/Surgery"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <RiSurgicalMaskLine className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">Surgery</span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/Nurses"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <GiNurseFemale className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">Nurses</span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/Hospitals"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <FaRegHospital className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">Hospitals</span>
                  </a>
                </li>
                <li className="--set-active-tables-html">
                  <a
                    href="/dashboard/MedicalTest"
                    className="flex items-center p-2 mb-1 mt-5 rounded-lg bg-white shadow-lg font-medium"
                  >
                    <div className="w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center text-white bg-[#CB0C9F] shadow-md">
                      <GiTestTubes className="mdi mdi-widgets inline-flex mx-1" />
                    </div>
                    <span className="grow ml-3 text-gray-600">MedicalTest</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`w-full  ${SidebarOpen ? "hidden" : ""}`}>
            <main className="w-full">

              {children}
            </main>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;