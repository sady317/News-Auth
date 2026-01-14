import React from "react";

function Category() {
  return (
    <>
      <h1 className="text-2xl  font-bold">All Category</h1>
      <div className="my-2  space-y-1">
        <p className="pl-3 text-lg cursor-pointer   hover:bg-gray-300 p-2 hover:font-bold rounded-md">
          All News
        </p>
        <p className="pl-3 text-lg cursor-pointer   hover:bg-gray-300 p-2 hover:font-bold rounded-md">
          Breaking News
        </p>
        <p className="pl-3 text-lg cursor-pointer   hover:bg-gray-300 p-2 hover:font-bold rounded-md">
          Regular News
        </p>
        <p className="pl-3 text-lg cursor-pointer   hover:bg-gray-300 p-2 hover:font-bold rounded-md">
          International News
        </p>
        <p className="pl-3 text-lg cursor-pointer   hover:bg-gray-300 p-2 hover:font-bold rounded-md">
          Sports
        </p>
        <p className="pl-3 text-lg cursor-pointer  hover:bg-gray-300 p-2 hover:font-bold rounded-md">
          Entertainment
        </p>
        <p className="pl-3 text-lg cursor-pointer   hover:bg-gray-300 p-2 hover:font-bold rounded-md">
          Culture
        </p>
        <p className="pl-3 text-lg cursor-pointer   hover:bg-gray-300 p-2 hover:font-bold rounded-md">
          Arts
        </p>
      </div>
    </>
  );
}

export default Category;
