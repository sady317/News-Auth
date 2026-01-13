import moment from "moment/moment"
import logo from "../../../public/Images/logo.png"

function Head() {
  return (
    <>
    <div className="flex justify-center flex-col items-center mt-10 lg:text-lg md:text-lg space-y-4">
        <img src={logo} alt="" className="lg:w-[40%] w-[84%]" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format('LLLL')}</p>
    </div>
    </>
  )
}

export default Head