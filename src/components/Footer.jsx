import React, { useEffect, useState } from "react";
import Textscroll from "../animation/Textscroll";
import Footerscroll from "../animation/Footerscroll";

const FONT = "sans-serif";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = {
    Links: ["Home", "Projects"],
    Fabrics: ["Cotton", "Linen", "Polyester", "Ribbon"],
    "Social Media": ["Facebook", "", "LinkedIn", "X", "YouTube"],
  };

  return (
    <footer id="footer"
      style={{
        backgroundColor: "black/20",
        fontFamily: FONT,
        padding: isMobile ? "40px 24px 24px" : "60px 80px 32px",
        boxSizing: "border-box",
        width: "100%",
        opacity: 0.8,
      }}
    >
      <div>
    <Footerscroll/>
  </div>
  <div className="flex flex-col lg:flex-row justify-between  items-start lg:items-center w-full">
  
  {/* Links Section */}
  <div
    className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-10 lg:mb-0"
  >
    {Object.entries(links).map(([category, items]) => (
      <div key={category} className="min-w-[120px]">
        <h3 className="font-extrabold text-[18px] lg:text-[22px] text-white mb-5">
          {category}
        </h3>

        <ul className="list-none p-0 m-0">
          {items.map((item) => (
            <li key={item} className="mb-2.5">
              <a
                href="#"
                className="!text-white/70 text-sm lg:text-[14.5px] transition-opacity duration-200 hover:opacity-50"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* Logo Section */}
  <div className="flex justify-center lg:justify-end w-full lg:w-auto">
    <img
      src="Hemelo Cotton Logo.png"
      alt="logo"
      className="h-28 lg:h-40 w-auto object-contain opacity-50"
    />
  </div>

</div>
      <div className="flex  flex-col items-start justify-end gap-5 md:flex-row lg:flex-row sm:flex-col mt-5">
      <div className="text-[16px] font-bold">
        Email: <a href="mailto:info@hemelocotton.com" className="">hemelocotton@gmail.com</a>
      </div>
      <div className="text-[16px] font-bold">
        Phone: <a href="tel:+1234567890" className="">+91 85080 80206</a>
      </div>
      </div>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #333",
          margin: "0 0 24px 0",
        }}
      />

      {/* Bottom Bar */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "10px" : "0",
        }}
      >
        <span
          style={{
            fontSize: "13.5px",
            color: "gray",
          }}
        >
          Created by{" "}
          <strong style={{ fontWeight: "800", color: "white" }}>
            HEMELO COTTON
          </strong>
        </span>

        <span
          style={{
            fontSize: "13.5px",
            color: "gray",
          }}
        >
          Powered by{" "}
          <strong style={{ fontWeight: "800", color: "white" }}>
            HEMELO COTTON
          </strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;