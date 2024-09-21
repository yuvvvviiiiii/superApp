import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import image from "../assets/image 13.png";

export default function Home() {
  // const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = {};

    if (!data.name || data.name.trim() === "") {
      error.name = "Field is requrired";
    }
    if (!data.username || data.username.trim() === "") {
      error.username = "Field is required";
    }
    if (!data.email || data.email.trim() === "") {
      error.email = "Field is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      error.mobile = "Field No. is required";
    }
    if (!data.checkbox) {
      error.checkbox = "Check this box if u want to proceed";
    }

    setError(error);

    if (Object.keys(error).length > 0) {
      return;
    } else {
      alert("Form Submitted Successfully");
      localStorage.setItem("user", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      // navigate("./selection")
    }
  };

  return (
      <div className="flex">
        {/* Poster Section */}
        <div className="image-container">
          <img src={image} alt="" className="image"/>
          <p className="quote-text">
        Discover new things on Superapp
      </p>
        </div>
  
        {/* Form Section */}
        <div
          className="w-1/2  bg-gray-950" style={{
            display: "block"
          }}>
          <div
           className="text-5xl font-bold mb-3 heading text-center my-10 pb-4">
            <h2>
              Super app
            </h2>
          </div>
          <div className="text-lg font-medium text-white mb-5 text-center">
            <h4>Create your new account</h4>
          </div>
  
          <div className="w-1/2 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="shadow-md border-b-0 px-5 pt-5 pb-7 mb-4"
            >
              <div className="mb-4 ">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleInput}
                  className={`border ${error.name ? "border-red-500" : "border-gray-300"} rounded w-full py-2 px-3 text-slate-200 bg-gray-800 z-0`}
                  placeholder="Name"
                />
                <div className="text-red-500 text-xs h-3 mb-1 py-1 my-1">
                  <span>{error.name}</span>
                </div>
              </div>
  
              <div className="mb-4">
                <input
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={handleInput}
                  className={`border ${error.username ? "border-red-500" : "border-gray-300"} rounded w-full py-2 px-3 text-slate-200  bg-gray-800 z-0`}
                  placeholder="Username"
                />
                <div className="text-red-500 text-xs py-1 my-1 h-3 ">
                  <span>{error.username}</span>
                </div>
              </div>
  
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleInput}
                  className={`border ${error.email ? "border-red-500" : "border-gray-300"} rounded w-full py-2 px-3 text-slate-200  bg-gray-800 z-0`}
                  placeholder="Email"
                />
                <div className="text-red-500 text-xs  py-1 my-1 h-3 ">
                  <span>{error.email}</span>
                </div>
              </div>
  
              <div className="mb-4">
                <input
                  type="tel"
                  name="mobile"
                  value={data.mobile}
                  onChange={handleInput}
                  className={`border ${error.mobile ? "border-red-500" : "border-gray-300"} rounded w-full py-2 px-3 text-slate-200 bg-gray-800 z-0`}
                  placeholder="Mobile No."
                />
                <div className="text-red-500 text-xs h-3 my-1 py-1">
                  <span>{error.mobile}</span>
                </div>
              </div>
  
              <div className="flex items-center space-x-3 mb-1">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={handleInput}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <div className="text-gray-500 font-medium text-center">
                  <label htmlFor="myCheckbox">
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
              <div className="text-red-500 text-xs my-1 py-1 h-3 mb-8">
                <span>{error.checkbox}</span>
              </div>
              <button
                className="rounded-full w-full h-10 bg-green-600 text-2xl font-medium text-slate-100"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
            <div>
            <p className="text-slate-100">
              By clicking on Sign up. you agree to Superapp <span className="text-green-500">Terms and Conditions of Use</span>
            </p>
            </div>
            <div>
            <p className="text-slate-100 mb-3 my-3">
            To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="text-green-500">Privacy Policy.</span>
            </p>
            </div>
          </div>
          
        </div>
      </div>
  );
}



