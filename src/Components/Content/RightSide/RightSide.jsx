import React, { useContext } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { CgGoogle } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrGithub, GrGoogle } from "react-icons/gr";
import img from "../../../../public/Images/img1.png"
import img2 from "../../../../public/Images/console.jpg"
import img3 from "../../../../public/Images/design.webp"
import backg from "../../../../public/Images/bg.jpg"
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

function RightSide() {
  const {handleLogin,handleGithubLogin}=useContext(AuthContext)
  // console.log(user)
 
  return (
    <>
      <div className="space-y-6 h-screen overflow-auto">
        {/* CONTENT 1 */}
        <div className="space-y-2">
          <h1 className="flex text-2xl font-bold ">Login with</h1>
          <div className="flex flex-col gap-2">
            <button onClick={()=>handleLogin()} className="uppercase btn text-sm bg-gray-800 text-white rounded-md">
              <CgGoogle /> Google
            </button>
            <button onClick={()=>handleGithubLogin()} className="uppercase btn text-sm bg-gray-800 text-white rounded-md">
              <GrGithub />
              Github
            </button>
          </div>
        </div>

        {/* CONTENT 2 */}
        
 <div className="py-10 space-y-2 ">
                <h1 className="text-2xl font-bold">Find Us On</h1>
                <div className="">
                    <a className="flex items-center gap-4 border rounded-t-lg p-3"> <FaFacebook></FaFacebook> Facebook</a>
                    <a className="flex items-center gap-4 border-x p-3"><FaTwitter></FaTwitter> Twitter</a>
                    <a className="flex items-center gap-4 border rounded-b-lg p-3"><FaInstagram></FaInstagram> Instagram</a>
                </div>

            </div>

    {/* CONTENT 3 */}
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Q-Zone</h1>
      <div className="space-y-4">

        <div className="flex justify-center flex-col items-center">
          <img src={img} alt="img1" className="h-[260px]"/>
          <p className="text-lg font-bold">Cartoon</p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img src={img2} alt="img1" className="h-[260px] w-[230px] rounded-sm"/>
          <p className="text-lg font-bold">Gaming</p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img src={img3} alt="img1" className="h-[260px] w-[230px] rounded-sm"/>
          <p className="text-lg font-bold">Design</p>
        </div>

      </div>
    </div>


    {/* CONTENT 4 */}
<div className="h-[500px] w-[240px] opacity-220 rounded-md flex flex-col justify-center items-center mx-auto px-4 gap-6 text-center bg-center bg-no-repeat text-white"style={{backgroundImage:`url(${backg})`}}>
  <h1 className="text-3xl font-bold">Create an Amazing Newspaper</h1>
  <p className="text-lg">Discover thousands of options, easy to customize layouts, one-click to import demo and much more..</p>
  <button className="uppercase btn btn-primary">Learn More</button>
</div>

      </div>
    </>
  );
}

export default RightSide;
