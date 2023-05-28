import { BsPersonFill } from "react-icons/bs";
import React, { useState } from "react";
// import { useDashboardAuth } from "../../context/DashboardAuthContext";
import { BiBell, BiDesktop } from "react-icons/bi";

const Header = () => {
  //   const { logout, user } = useDashboardAuth();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownOpen, setDropdownNotificationOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggledropdownNotificationOpen = () => {
    setDropdownNotificationOpen(!dropdownOpen);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8  bg-[#F8F9FA] ">
      <div className="flex justify-between h-16">
        {" "}
        <div className="flex  items-center ">
          {" "}
          <p className="text-gray-500  lg:ml-2">
          </p>
        </div>
        <div className="p-3 rounded-lg flex">
          {/* Notification>>> */}
          <div className="flex justify-center">
            <div className="relative">
              <button
                onClick={toggledropdownNotificationOpen}
                className="relative z-10 block rounded-md p-3 focus:outline-none"
              >
                <BiBell size={20} />
              </button>
              <div
                style={{ display: dropdownOpen ? "block" : "none" }}
                className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 w-80"
              >
                <div className="py-2">
                  <div className="flex justify-center">
                    <div className="font-bold text-blue-500">Notifications</div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover mx-1"
                      src="/adminIcon.png"
                      width={60}
                      height={60}
                      alt="user"
                    />
                    <p className="text-gray-600 text-sm mx-2">
                      <span className="font-bold" href="#">
                        Sara Salah
                      </span>{" "}
                      replied on the{" "}
                      <span className="font-bold text-green-500" href="#">
                        Upload Image
                      </span>{" "}
                      artical . 2m
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover mx-1"
                      src="/adminIcon.png"
                      width={60}
                      height={60}
                      alt="user"
                    />
                    <p className="text-gray-600 text-sm mx-2">
                      <span className="font-bold" href="#">
                        Slick Net
                      </span>{" "}
                      start following you . 45m
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover mx-1"
                      src="/adminIcon.png"
                      width={60}
                      height={60}
                      alt="user"
                    />
                    <p className="text-gray-600 text-sm mx-2">
                      <span className="font-bold" href="#">
                        Jane Doe
                      </span>{" "}
                      Like Your reply on{" "}
                      <span className="font-bold text-green-500" href="#">
                        Test with TDD
                      </span>{" "}
                      artical . 1h
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block bg-withe text-blue-500 text-center font-bold pt-2"
                  >
                    See all Notifications
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*<<<< Notification*/}

          <div>
            <div className="relative inline-block text-left z-50">
              <div>
                <button
                  type="button"
                  className="flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                  onClick={toggleDropdown}
                >
                  <img
                    src="/defaultuserphoto.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h1 className="md:block hidden mx-2 font-bold">
                    {/* {user?.first_name} */}
                  </h1>
                  <svg
                    className="md:block hidden h-4 w-4 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                style={{ display: dropdownVisible ? "block" : "none" }}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-xs text-gray-400">
                    Manage Account
                  </a>
                  <a
                    href="/dashboard/profileadmin/profileuseradmin"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile{" "}
                  </a>

                  <a
                    href="#"
                    // onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
