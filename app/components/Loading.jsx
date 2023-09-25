import React from "react";
import Image from "next/image";
import loader from "./Spinner.svg";

const Loading = () => {
  return (
    <section className="h-full w-screen flex items-center justify-center">
      <Image src={loader} alt="Loading..."></Image>
    </section>
  );
};

export default Loading;
