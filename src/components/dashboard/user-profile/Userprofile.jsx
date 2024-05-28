import React from "react";
import ProfilePic from "../../../img/docc.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Userprofile = () => {
  const { userData } = useAuth();
  const {
    name,
    address,
    email,
    phone,
    title,
    type,
    website,
    facebook,
    instagram,
    twitter,
    image,
  } = userData || {};
  return (
    <div className="md:flex p-4 pr-0 dark:bg-gray-900">
      <div className="md:w-1/5 flex justify-center md:justify-end">
        <img
          src={image || ProfilePic}
          alt="profilePic here"
          className="h-40 w-40 bg-gray-300 rounded-full"
        />
      </div>
      <div className="border-t-4 border-gray-300 mt-20 w-full pl-4">
        <h4 className="font-bold text-xl text-gray-600 dark:text-gray-300">
          {name}{" "}
          {type === "admin" && (
            <span className="text-xs font-bold text-blue-600 bg-blue-200 rounded p-1 ml-3">
              Admin
            </span>
          )}
        </h4>

        <Link
          to="/dashboard/update-profile"
          className="bg-blue-800 text-gray-100 dark:text-gray-200 float-right mr-5 font-bold text-sm p-2 rounded -mt-5"
        >
          Edit Profile
        </Link>
        <h6 className="font-semibold text-gray-600 text-sm dark:text-gray-300">
          {title}
        </h6>
        <div className="pt-4">
          <span className="font-semibold text-gray-400 dark:text-gray-200">
            Contact Informations
          </span>
          <div className="flex justify-between lg:w-1/2">
            <div className="w-1/3 lg:w-1/4">
              <span className="font-semibold text-gray-600 dark:text-gray-300">
                Phone
              </span>
            </div>
            <div className="w-2/3 lg:w-3/4">
              <span className="text-gray-600 font-semibold dark:text-gray-300">
                {phone}
              </span>
            </div>
          </div>
          <div className="flex justify-between lg:w-1/2">
            <div className=" w-1/3 lg:w-1/4">
              <span className="font-semibold text-gray-600 dark:text-gray-300">
                Address
              </span>
            </div>
            <div className="w-2/3 lg:w-3/4">
              <span className="text-gray-600 font-semibold dark:text-gray-300">
                {address}
              </span>
            </div>
          </div>
          <div className="flex justify-between lg:w-1/2">
            <div className=" w-1/3 lg:w-1/4">
              <span className="font-semibold text-gray-600 dark:text-gray-300">
                Email
              </span>
            </div>
            <div className="w-2/3 lg:w-3/4">
              <span className="text-gray-600 font-semibold dark:text-gray-300">
                {email}
              </span>
            </div>
          </div>
          {website && (
            <div className="flex justify-between lg:w-1/2">
              <div className="w-1/3 lg:w-1/4">
                <span className="font-semibold text-gray-600 dark:text-gray-300">
                  Website
                </span>
              </div>
              <div className="w-2/3 lg:w-3/4 overflow-x-auto pr-2">
                <Link
                  to={website}
                  target="_blank"
                  className="text-gray-600 font-semibold dark:text-gray-400"
                >
                  {website}
                </Link>
              </div>
            </div>
          )}
          {facebook && (
            <div className="flex justify-between lg:w-1/2">
              <div className="w-1/3 lg:w-1/4">
                <span className="font-semibold text-gray-600 dark:text-gray-300">
                  Facebook
                </span>
              </div>
              <div className="w-2/3 lg:w-3/4 overflow-x-auto pr-2">
                <Link
                  to={facebook}
                  target="_blank"
                  className="text-gray-600 font-semibold dark:text-gray-400"
                >
                  {facebook}
                </Link>
              </div>
            </div>
          )}
          {instagram && (
            <div className="flex justify-between lg:w-1/2">
              <div className="w-1/3 lg:w-1/4">
                <span className="font-semibold text-gray-600 dark:text-gray-300">
                  Instagram
                </span>
              </div>
              <div className="w-2/3 lg:w-3/4 overflow-x-auto pr-2">
                <Link
                  to={instagram}
                  target="_blank"
                  className="text-gray-600 font-semibold dark:text-gray-400"
                >
                  {instagram}
                </Link>
              </div>
            </div>
          )}
          {twitter && (
            <div className="flex justify-between lg:w-1/2">
              <div className="w-1/3 lg:w-1/4">
                <span className="font-semibold text-gray-600 dark:text-gray-300">
                  Twitter
                </span>
              </div>
              <div className="w-2/3 lg:w-3/4 overflow-x-auto pr-2">
                <Link
                  to={twitter}
                  target="_blank"
                  className="text-gray-600 font-semibold dark:text-gray-400"
                >
                  {twitter}
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* <div className="pt-4">
          <span className="font-semibold text-gray-400">
            Basic Informations
          </span>
          <div className="flex justify-between w-1/2">
            <div className="w-1/4">
              <span className="font-semibold text-gray-600">Gender</span>
            </div>
            <div className="w-3/4">
              <span className="text-gray-600 font-semibold">Male</span>
            </div>
          </div>
          <div className="flex justify-between w-1/2">
            <div className="w-1/4">
              <span className="font-semibold text-gray-600">Age</span>
            </div>
            <div className="w-3/4">
              <span className="text-gray-600 font-semibold">21</span>
            </div>
          </div>
          <div className="flex justify-between w-1/2">
            <div className="w-1/4">
              <span className="font-semibold text-gray-600">Birth Date</span>
            </div>
            <div className="w-3/4">
              <span className="text-gray-600 font-semibold">20 April 2003</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Userprofile;
