import React from "react";

const Footerscroll = () => {
  return (
    <div className="w-full overflow-hidden px-4 ">
      
      <div
        className="
        flex justify-center items-center
        whitespace-nowrap uppercase font-serif text-white
        
        text-[clamp(30px,6vw,160px)]
        tracking-[0.12em]
        
        w-full
        opacity-100
        "
      >
        {"HEMELO COTTON".split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

    </div>
  );
};

export default Footerscroll;