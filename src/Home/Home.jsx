
import LeftSide from "../Components/Content/LeftSide/LeftSide";
import MidSide from "../Components/Content/MidSide/MidSide";
import RightSide from "../Components/Content/RightSide/RightSide";

function Home() {
  return (
    <>
      <div className="grid md:grid-cols-12   mt-10 ">
        <div className=" col-span-3">  <LeftSide />     </div>
       <div className=" col-span-6">      <MidSide />    </div>
        <div className=" col-span-3">       <RightSide />     </div>
      </div>
    </>
  );
}

export default Home;
