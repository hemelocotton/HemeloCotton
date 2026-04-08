import React from "react";

const Footerscroll = () => {
  return (
    <div className="w-full overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8">
      
      <div
        className="
        flex justify-center items-center
        whitespace-nowrap uppercase font-serif text-white
        
        text-[clamp(20px,6vw,120px)]   /* better scaling */
        tracking-[clamp(0.05em,0.2vw,0.15em)]  /* responsive spacing */
        
        w-full
        leading-none   /* removes extra height issues */
        "
      >
        {"HEMELO COTTON".split("").map((char, index) => (
          <span
            key={index}
            className="
              inline-block
              mx-[clamp(1px,0.6vw,6px)]   /* responsive gap between letters */
            "
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

    </div>
  );
};

export default Footerscroll;