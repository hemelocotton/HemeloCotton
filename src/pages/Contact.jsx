import React from 'react'
import { useEffect } from 'react';
import Footer from '../components/Footer';

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
            }, []);
  return (
    <div className='mt-20'>
        
  <div className=" bg-black flex items-center justify-center z-50 px-4 p-10">

    <div className="bg-black  w-full sm:max-w-xl md:max-w-2xl max-h-[100vh]  ">

   
     

      {/* HubSpot Form */}
      <div
        className="hs-form-frame max-w-xl mx-auto w-full min-h-[300px]"
        data-region="na2"
        data-form-id="a2dfc6ff-9c79-459c-9bcc-fdf12c54435b"
        data-portal-id="245488615"
      ></div>

    </div>

  </div>

    </div>
  )
}

export default Contact