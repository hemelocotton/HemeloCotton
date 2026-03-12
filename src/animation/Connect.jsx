"use client";
import { useState, useEffect } from "react";

function Connect() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const images = ["/model2.png", "/model3.png", "/model4.png", "/model5.png"];
  const loopImages = [...images, ...images, ...images];

  return (
    <div
      className="flex flex-col lg:flex-row bg-black min-h-screen"
      style={{ fontFamily: "'Arial Black', 'Arial Bold', sans-serif" }}
    >
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center px-6 lg:px-12 py-16">
        <div className="max-w-[580px] w-full">

          <h1
            style={{
              color: "#f0ece3",
              fontSize: "clamp(2.2rem, 3vw, 2rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Let's Create Something
            <br />
            Great Together
          </h1>

          <p
            style={{
              color: "#a0998e",
              fontSize: "0.95rem",
              lineHeight: 1.65,
              marginBottom: "32px",
              fontFamily: "Georgia, serif",
              maxWidth: "480px",
            }}
          >
            Get in touch with us today and let's start creating something great together.
          </p>

          <div className="flex flex-col items-start justify-center gap-5">
            <div className="text-[20px] font-bold text-white opacity-60">
              Phone: +91 85080 80206
            </div>

            <div className="text-[20px] font-bold text-white opacity-60">
              Email: hemelocotton@gmail.com
            </div>

            <div>
              <p
                onClick={() => setShowForm(true)}
                className="bg-white text-black hover:text-white hover:bg-white/50 
                px-8 py-3 uppercase text-sm font-bold
                transition-all duration-300 border-none cursor-pointer"
              >
                Get Sample →
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT MARQUEE */}
      <div className="w-full lg:w-[80%] overflow-hidden flex items-center py-10">
        <div className="marquee-track">
          {loopImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{
                height: "clamp(250px, 40vh, 500px)",
                width: "clamp(180px, 25vw, 300px)",
                objectFit: "contain",
                flex: "0 0 auto",
              }}
            />
          ))}
        </div>
      </div>

      {/* HUBSPOT POPUP */}
         {showForm && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

    <div className="bg-white rounded-lg relative w-full sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-8">

      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-4 text-xl font-bold text-gray-700 hover:text-white"
      >
        ✕
      </button>

      {/* HubSpot Form */}
      <div
        className="hs-form-frame w-full"
        data-region="na2"
        data-form-id="a2dfc6ff-9c79-459c-9bcc-fdf12c54435b"
        data-portal-id="245488615"
      ></div>

    </div>

  </div>
)}

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 10px;
          animation: marquee-x 18s linear infinite;
        }

        @keyframes marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
          .hs-form-frame,
.hs-form-frame iframe {
  width: 100% !important;
  max-width: 100% !important;
}

.hs-form-frame form {
  width: 100% !important;
}

.hs-form-frame input,
.hs-form-frame textarea,
.hs-form-frame select {
  width: 100% !important;
  box-sizing: border-box;
}
      `}</style>

    </div>
  );
}

export default Connect;