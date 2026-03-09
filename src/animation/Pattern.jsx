import React from "react";

function Pattern() {

  const items = [
    { img: "/Hoodie.jpg", name: "Hoodie" },
    { img: "/Joggers.jpg", name: "Joggers" },
    { img: "/Kids Wear.jpg", name: "Kids Wear" },
    { img: "/Polo T-Shirts.png", name: "Polo T-Shirts" },
    { img: "/Shirts.jpg", name: "Shirts" },
    { img: "/Shorts.jpg", name: "Shorts" },
    { img: "/Sweat Shirts.jpg", name: "Sweat Shirts" },
    { img: "/Track Pants.jpg", name: "Track Pants" }
  ];

  const loopItems = [...items, ...items, ...items];

  return (
    <div className="relative">
      <div className="w-full overflow-hidden flex items-center py-10">
        <div className="marquee-track">

          {loopItems.map((item, i) => (
            <div key={i} className="relative flex-shrink-0">

              <img
                src={item.img}
                alt={item.name}
                style={{
                  height: "clamp(250px, 40vh, 500px)",
                  width: "clamp(180px, 25vw, 300px)",
                  objectFit: "contain"
                }}
              />

              {/* Title */}
              <div className="absolute top-85% left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold bg-black/40 px-3 py-1 rounded">
                {item.name}
              </div>  

            </div>
          ))}

        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 20px;
          animation: marquee-x 18s linear infinite;
        }

        @keyframes marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Pattern;
