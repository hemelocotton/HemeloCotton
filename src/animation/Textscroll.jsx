import React from "react";

const Textscroll = () => {
  return (
    <div className="overflow-hidden w-full  py-4">
      
      <div className="scroll-text flex whitespace-nowrap font-bold uppercase
      text-[100px] sm:text-[120px] md:text-[210px] lg:text-[300px] gap-10 opacity-50">

        <span>Hemelo</span>
        <span>Cotton</span>
        <span>Global</span>
        <span>Hemelo</span>
        <span>Cotton</span>
        <span>Global</span>

        <span>Hemelo</span>
        <span>Cotton</span>
        <span>Global</span>
        <span>Hemelo</span>
        <span>Cotton</span>
        <span>Global</span>

      </div>

    </div>
  );
};

export default Textscroll;