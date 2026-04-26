"use client";
import Image from "next/image";

const error = () => {
  return (
    <div className="min-h-screen content-center">
      <h1 className="text-7xl text-red-500 text-center animate-bounce font-bold my-5">
        Error
      </h1>
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default error;
