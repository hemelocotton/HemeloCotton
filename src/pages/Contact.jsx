import React, { useEffect } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {
      document.body.removeChild(script); // cleanup (important)
    };
  }, []);

  return (
    <div className="mt-16 sm:mt-20">
      
      <div className="bg-black min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
        
        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          
          {/* Optional Heading */}
          <h2 className="text-white text-center uppercase mb-6 
                         text-[clamp(18px,3vw,28px)] tracking-wide">
            Contact Us
          </h2>

          {/* HubSpot Form */}
          <div
            className="
              hs-form-frame
              w-full
              min-h-[350px]
              sm:min-h-[400px]
              bg-black
            "
            data-region="na2"
            data-form-id="a2dfc6ff-9c79-459c-9bcc-fdf12c54435b"
            data-portal-id="245488615"
          ></div>

        </div>

      </div>


    </div>
  );
};

export default Contact;