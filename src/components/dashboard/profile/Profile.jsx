import React, { useEffect } from "react";
import Doctor from "../../../img/docc.png";
import axios from "axios";
import { setTeacherreducer } from "../../../redux/teacherReducer/teacherReducer";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teacherReducer.teachers);
  console.log(teachers);
  const FetchTeachers = () => {
    axios
      .get("https://kuricmt-backend.onrender.com/user")
      .then((res) => {
        dispatch(setTeacherreducer(res.data.AllUser));
      })
      .catch((err) => {
        console.log("fetching error");
      });
  };
  useEffect(() => {
    FetchTeachers();
     // eslint-disable-next-line
  }, []);
  return (
    <div className="p-2 border m-3">
      <h3 className="font-semibold text-gray-900">Teachers Profile</h3>
      <div className="flex flex-wrap">
        {teachers &&
          teachers.length !== 0 &&
          teachers.map((ele) => {
            if (ele.isactivate === true) {
              return (
                <div className="w-full md:w-1/2 lg:w-1/4 px-2 my-2">
                  <div className="border rounded cursor-pointer box-border overflow-clip">
                    <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-100"></div>
                    <div>
                      <div className="rounded-full h-28 w-28 m-auto -mt-16 bg-gradient-to-r from-gray-400  to-gray-200 overflow-hidden ring ring-white">
                        <img
                          src={ele.image || Doctor}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                      <h4 className="font-semibold text-center text-gray-800">
                        {ele.name}
                      </h4>
                      <div className="px-5">
                        <div className="text-center">
                          <button className="border rounded px-3 py-1 my-2 block bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200 m-auto">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        {teachers.length === 0 && (
          <div className="flex items-center justify-center w-full py-20">
            <span>There is no teacher yet</span>
          </div>
        )}

        {/* doctor profile end */}
      </div>
    </div>
  );
};

export default Profile;
