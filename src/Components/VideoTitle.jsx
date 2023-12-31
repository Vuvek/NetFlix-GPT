import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video w-screen bg-gradient-to-r from-black">
      <div className="absolute lg:block hidden left-14 lg:top-[25%]">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <p className="py-6 text-lg lg:w-1/3 sm:w-1/3 text-justify text-white bg-opacity-0 opacity-90">
          {overview}
        </p>
        <div className="flex gap-6">
          <button className="lg:px-16 p-4 font-bold text-black text-xl bg-white rounded-lg ">
            <span>&#9655;</span> Play
          </button>
          <button className="lg:px-14 p-4 font-bold text-white text-xl bg-gray-400 rounded bg-opacity-50">
            <span className="text-black"></span>More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
