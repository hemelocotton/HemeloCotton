import React, { useEffect, useState } from "react";

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
      {/* Columns */}
      <div  className="flex flx-row items-center justify-between ">
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "40px" : "80px",
          marginBottom: "60px",
        }} className=""
      >
        {Object.entries(links).map(([category, items]) => (
          <div key={category} style={{ minWidth: "120px" }}>
            <h3
              style={{
                fontWeight: "800",
                fontSize: isMobile ? "18px" : "22px",
                color: "white",
                marginBottom: "20px",
                marginTop: 0,
              }}
            >
              {category}
            </h3>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((item) => (
                <li key={item} style={{ marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: isMobile ? "14px" : "14.5px",
                      color: "white",
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.5")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  <div className="hidden lg:flex flex-col sm:flex-row gap-0 lg:gap-5 py-10 lg:py-20 items-center">
  {["H","E","M","E","L","O"," ","C","O","T","T","O","N"].map((letter, i) => (
    <p
      key={i}
      className=" text-[50px] sm:text-[70px] lg:text-[90px] leading-tight "
    >
      {letter}
    </p>
  ))}
</div>

      </div>
      <div className="flex  flex-col items-start justify-end gap-5 md:flex-row lg:flex-row sm:flex-col">
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