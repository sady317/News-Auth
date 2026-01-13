import { PiFirstAidKit } from "react-icons/pi"
import canada from "../../../public/Images/card.jpg"
import furniture from "../../../public/Images/furniture.jpg"
import water from "../../../public/Images/water.jpg"
import moment from "moment/moment"

function Card() {
  return (
    <>
    <section className="space-y-8 mt-12 mb-12">

    <div className="px-1 space-y-3">
        <img src={canada} className="rounded-sm" alt="" />
        <p className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <span className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <p>Sports</p>
            <p><PiFirstAidKit/></p>
          </span>
            <p>{moment().format('ll')}</p>
        </span>
    </div>

    <div className="px-1 space-y-3">
        <img src={furniture} className="rounded-sm" alt="" />
        <p className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <span className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <p>Sports</p>
            <p><PiFirstAidKit/></p>
          </span>
            <p>{moment().format('ll')}</p>
        </span>
    </div>

    <div className="px-1 space-y-3">
        <img src={water} className="rounded-sm" alt="" />
        <p className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <span className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <p>Sports</p>
            <p><PiFirstAidKit/></p>
          </span>
            <p>{moment().format('ll')}</p>
        </span>
    </div>

    </section>
    </>
  )
}

export default Card