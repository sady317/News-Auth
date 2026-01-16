import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { BiBookmark, BiShare } from "react-icons/bi";

import "@smastrom/react-rating/style.css";

function MidSide() {
  const [news, setNews] = useState([]);
  const [slice, setSlice] = useState(200);

  useEffect(() => {
    fetch("/News.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <>
      <div className="space-y-4 md:h-screen md:overflow-scroll">
        {news.map((n) => (
          <>
          <div className="main border border-gray-300 rounded-md p-3 space-y-6">

       
            <section className="flex justify-between  px-2 items-center">
              <div className="flex gap-2">
                <img src={n.author.img} className="w-12 rounded-full" alt="" />
                <span className="flex flex-col gap-1">
                  <p>{n.author.name}</p>
                  <p>{n.author.published_date}</p>
                </span>
              </div>
              <div className="flex text-xl text-blue-950 gap-1">
                <BiBookmark />
                <BiShare />
              </div>
            </section>

            <div className="space-y-4 mt-6">
              <p className="font-bold px-[8%] ">{n.title}</p>
              <img src={n?.image_url} alt="" />
              <div className="text-lg">
                <p>{n.details.slice(0, slice)} </p>

                {slice === 200 ? (
                  <button
                    onClick={() => {
                      setSlice(n.details.length);
                    }}
                    className="text-blue-800 underline cursor-pointer "
                  >
                    Read More
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSlice(200);
                    }}
                    className="text-blue-800 underline cursor-pointer "
                  >
                    Read Less
                  </button>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <Rating style={{ maxWidth: 120 }} value={2} readOnly />
             <p>{n.total_view}</p>
            </div>
               </div>
          </>
        ))}
      </div>
    </>
  );
}

export default MidSide;
