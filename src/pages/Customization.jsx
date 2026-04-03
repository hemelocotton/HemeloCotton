"use client"

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Textscroll from "../animation/Textscroll";
import Button from "../animation/Button";



const stories=[
  {
    id:1,
    title:"Tailored Manufacturing for Your Brand",
    cont:"Unlike mass producers, we operate on a made-to-order basis, meaning no ready stocks sit on our shelves",
    img:"/custom01.jpg",
  },
  {
    id:2,
    title:"Advanced Washing Techniques",
    cont:"As an innovative Tirupur T-shirt manufacturer, we offer a variety of advanced washing treatments to enhance your garments’ texture and appearance.",
    img:"/custom02.jpg",
  },
  {
    id:3,
    title:"Diverse Printing Methods",
    cont:"Our printing services cater to every design need with an extensive array of methods, including direct printing, screen printing, and offset printing.",
    img:"/custom03.jpg",
  },
  {
    id:4,
    title:"Elegant Embroidery Services",
    cont:"Add a touch of sophistication to your branded apparel with our expert embroidery services.",
    img:"/custom04.jpg",                                                                                            
  },
  {
    id:5,
    title:"Custom Hang Tags",
    cont:"Hang tags serve as a powerful tool to convey your brand’s message and garment details.",
    img:"/custom05.jpg",
  },
  {
    id:6,
    title:"Precision Pantone Color Matching",
    cont:"Achieving the perfect shade for your apparel is effortless with our Pantone color matching system.",
    img:"/custom06.jpg",
  },
  {
    id:7,
    title:"Custom Twill Tape",
    cont:"Twill tape, often found in garment necklines and inside caps, reinforces seams while adding a refined finish.",
    img:"/custom07.jpg",
  },
  {
    id:8,
    title:"Versatile Patch Labels",
    cont:"Patch labels provide a stylish and flexible way to showcase your brand. Our offerings include metal patches, silicon patches, leather patches, and embroidered patches, each applicable to various garment areas for a unique, high-end look.",
    img:"/custom08.jpg",
  },
  {
    id:9,
    title:"Branded Buttons and Zippers",
    cont:"Elevate your garments with custom-branded buttons and zippers, available in metal, plastic, or custom-molded designs.",
    img:"/custom09.jpg",
  },
  {
    id:10,
    title:"Custom Neck Labels",
    cont:"Neck labels offer an elegant, understated way to display your brand",
    img:"/custom10.jpg",
  },
  {
    id:11,
    title:"Durable Wash Care Labels",
    cont:"Clear care instructions are vital for garment longevity, and our customizable wash care labels deliver just that. ",
    img:"/custom11.jpg",
  },
  {
    id:12,
    title:"Branded Poly Packs and Paper Bags",
    cont:"Packaging is the final step in presenting your brand, and our customizable poly packs and paper bags are designed to impress.",
    img:"/custom12.jpg",
  },
  {
    id:13,
    title:"Distressing Wash",
    cont:"Distressing wash intentionally ages fabrics, especially denim, using abrasion, chemical washes, and enzyme treatments to create a faded, frayed look. ",
    img:"/fabric13.jpg",
  }
]

const items1 = [
    { img: "/p1.jpg", name: "Non-PVC Printing" },
    { img: "/p2.jpg", name: "Plastisol Printing" },
    { img: "/p3.jpg", name: "PVC Printing" },
    { img: "/p4.jpg", name: "Puff Printing" },
    { img: "/p5.jpg", name: "Heat Transfer Printing" },
    { img: "/p6.jpg", name: "D2F Printing" },
    { img: "/p7.jpg", name: "All-Over Garment Printing" },
    { img: "/p8.jpg", name: "Pigment Printing" },
    { img: "/p9.jpg", name: "D2G Printing" },
    { img: "/p10.jpg", name: "Discharge Printing" },
    { img: "/p11.jpg", name: "CMYK Printing" },
    { img: "/p13.jpg", name: "Digital Printing" },
    { img: "/p14.jpg", name: "Rubber Patch" },
    { img: "/p15.jpg", name: "High-Density Printing" },
    { img: "/p15.jpg", name: "Reflective Printing" },
    { img: "/p16.jpg", name: "UV Printing" },
    
  ];

  const loopItems1 = [...items1, ...items1, ...items1, ...items1, ...items1];

//   const items2 = [
//     { img: "/e1.jpg", name: "Non-PVC Embroidery" },
//     { img: "/e2.jpg", name: "Plastisol Embroidery" },
//     { img: "/e3.jpg", name: "PVC Embroidery" },
//     { img: "/e4.jpg", name: "Puff Embroidery" },
//     { img: "/e5.jpg", name: "Heat Transfer Embroidery" },
//     { img: "/e6.jpg", name: "D2F Embroidery" },
   
    
//   ];

//   const loopItems2 = [...items2, ...items2, ...items2, ...items2, ...items2];

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const p = 1 - (rect.bottom / (winH + rect.height));
      setProgress(Math.min(1, Math.max(0, p)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return progress;
}

function Card({ story, index, total }) {

  const ref = useRef(null);
  const progress = useScrollProgress(ref);
  const [hovered, setHovered] = useState(false);

  const stickyTop = `calc(clamp(70px, 12vw, 130px) + ${index * 14}px)`;

  const scale = 1 - (progress * 0.06);
  const opacity = progress > 0.85 ? 1 - ((progress - 0.85) / 0.15) : 1;
  const imgY = progress * 80;

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: stickyTop,
        zIndex: index + 1,
        marginBottom: index === total - 1 ? 0 : "6px",
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform: `scale(${scale})`,
          opacity,
          transition: "transform 0.1s linear, opacity 0.1s linear",
          transformOrigin: "top center",
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          height: "clamp(300px,65vh,580px)",
          background: "#111",
          width: "clamp(320px,90vw,900px)",
          margin: "0 auto",
        }}
      >

        {/* IMAGE */}
        <div
          style={{
            position: "absolute",
            inset: "-15% 0",
            overflow: "hidden",
          }}
        >
          <img
            src={story.img}
            alt={story.cont}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `translateY(${imgY}px) scale(${hovered ? 1.07 : 1})`,
              transition: hovered
                ? "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)"
                : "transform 0.1s linear",
              filter: `brightness(${hovered ? 0.55 : 0.7})`,
            }}
          />
        </div>

        {/* overlay */}
        <div style={{
          position:"absolute",
          inset:0,
          background:"rgba(70,100,115,0.2)"
        }}/>

        {/* CONTENT */}
        <div style={{
          position:"absolute",
          inset:0,
          padding:"clamp(1rem,3vw,2rem)",
          display:"grid",
          gridTemplateRows:"auto 1fr auto",
          gridTemplateColumns:"1fr auto",
          color:"#f0ece3"
        }}>

          <span style={{
            gridRow:1,
            gridColumn:1,
            fontWeight:700,
            fontSize:"clamp(1rem,2vw,2rem)",
            textTransform:"uppercase",
            letterSpacing:"0.1em"
          }}>
            {story.title}
          </span>

          <p style={{
            gridRow:3,
            gridColumn:1,
            fontSize:"clamp(0.9rem,2.2vw,1.1rem)",
            lineHeight:1.4,
            maxWidth:"90%",
            alignSelf:"end",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            transition:"0.5s"
          }}>
            {story.cont}
          </p>

          <div style={{
            gridRow:3,
            gridColumn:2,
            alignSelf:"end"
          }}>
            <div style={{
              width:"2.2rem",
              height:"2.2rem",
              border:"1.5px solid rgba(240,236,227,0.45)",
              borderRadius:"50%",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:"0.9rem",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition:"0.4s"
            }}>
              ↗
            </div>
          </div>

        </div>

        {/* INDEX */}
        <div style={{
          position:"absolute",
          top:"clamp(1rem,3vw,2rem)",
          left:"50%",
          transform:"translateX(-50%)",
          fontSize:"0.7rem",
          letterSpacing:"0.25em",
          color:"rgba(240,236,227,0.35)"
        }}>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

      </div>
    </div>
  );
}

export default function Customization (){

   const [showForm, setShowForm] = useState(false);
  
       useEffect(() => {
          const script = document.createElement("script");
          script.src = "https://js.hsforms.net/forms/embed/v2.js";
          script.async = true;
          document.body.appendChild(script);
            window.scrollTo(0, 0);
        }, []);
  return (
    <div className='bg-black '>

      {/* Customization */}
      <div className='flex items-center justify-center min-h-[100vh]'>

        <div className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 pt-24 lg:pt-32 gap-8">

          {/* TEXT */}
          <motion.div
            initial={{ opacity:0, x:-200 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.8 }}
            className="max-w-[800px] text-left"
          >

            <p className="text-white text-[28px] sm:text-[30px] md:text-[40px] lg:text-[60px] font-semibold uppercase">
             Customization Options for Your Branded Apparel at Hemelo Cotton Global®
            </p>

            <p className="text-white opacity-50 mt-4 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] uppercase leading-relaxed">
            Discover unparalleled customization options for your branded apparel at Hemelo Cotton Global®, a leading T-shirt manufacturer in Tirupur. We understand that your brand is unique, and we are dedicated to bringing your vision to life through our extensive range of tailored solutions. Specializing in knitted apparel, we craft everything from T-shirts and polo shirts to joggers, track pants, and caps, each designed to reflect your brand’s distinct identity with precision and care.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">

              <p onClick={() => setShowForm(true)} className="bg-white text-black px-8 py-3 uppercase text-sm font-bold  cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                Talk to Manufacturing Expert
              </p>

              <p onClick={() => setShowForm(true)} className="bg-white text-black px-8 py-3 uppercase text-sm font-bold cursor-pointer hover:bg-black hover:text-white transition-all duration-300">  
                Get Sample
              </p>

            </div>

             {/* <div className="pt-5 lg:pt-10 sm:pt-5 md:px-5">
                        <a className="" href="/">
                          <Button/>
                        </a>
            </div> */}

          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity:0, y:180 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:1 }}
            className="w-full flex justify-center"
          >
            <img
              src="/Customization.jpg"
              alt="Customization"
              className="w-full max-w-[380px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[550px] h-auto lg:h-[650px] object-cover rounded-xl"
            />
          </motion.div>

        </div>
      </div>

      <Textscroll/>

      {/* STACK CARDS */}
      <div style={{position:"relative"}}>
        {stories.map((story,i)=>(
          <Card key={story.id} story={story} index={i} total={stories.length}/>
        ))}
      </div>


      {/* Printing Card */}
       <div className="relative">

        <div className="text-white text-[40px] font-bold text-start py-5 uppercase px-5 md:text-[70px] lg:text-[50px] sm:text-[70px]">
            <p>Printing Options</p>
        </div>

      {/* ---------- DESKTOP MARQUEE ---------- */}
      <div className="desktop-marquee w-full overflow-hidden py-2">
        <div className="marquee-track"  style={{ animationDuration: "70s" }}>

          {loopItems1.map((item, i) => (
            <div key={i} className="relative flex-shrink-0">

              <img
                src={item.img}
                alt={item.name}
                style={{
                  height: "clamp(250px, 40vh, 500px)",
                 width: "300px",
                  objectFit: "contain"
                }}
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-bold bg-black/40 px-3 py-1 rounded">
                {item.name}
              </div>

            </div>
          ))}

        </div>
      </div>


      {/* ---------- MOBILE SCROLL CAROUSEL ---------- */}
      <div className="mobile-carousel">

        {items1.map((item, i) => (
          <div key={i} className="carousel-item">

            <img
              src={item.img}
              alt={item.name}
              className="carousel-img"
            />

            <div className="title">
              {item.name}
            </div>

          </div>
        ))}

      </div>


      <style>{`

      /* DESKTOP MARQUEE */

      .marquee-track{
        display:flex;
        gap:20px;
        animation: marquee-x 70s linear infinite;
        will-change: transform;
        width: max-content;
      }

      @keyframes marquee-x{
        0%{
          transform:translateX(0);
        }
        100%{
          transform:translateX(-100%);
        }
      }

      .marquee-track:hover{
        animation-play-state:paused;
      }


      /* MOBILE CAROUSEL */

      .mobile-carousel{
        display:none;
      }

      @media (max-width:768px){

        .desktop-marquee{
          display:none;
        }

        .mobile-carousel{
          display:flex;
          overflow-x:auto;
          gap:20px;
          padding:20px;
          scroll-snap-type:x mandatory;

          scrollbar-width:none;
          -ms-overflow-style:none;
        }

        .mobile-carousel::-webkit-scrollbar{
          display:none;
        }

        .carousel-item{
          flex:0 0 auto;
          scroll-snap-align:center;
          position:relative;
        }

        .carousel-img{
          height:320px;
          width:240px;
          object-fit:contain;
        }

        .title{
          position:absolute;
          bottom:20px;
          left:50%;
          transform:translateX(-50%);
          color:white;
          font-weight:bold;
          background:rgba(0,0,0,0.4);
          padding:6px 12px;
          border-radius:6px;
        }

      }

      `}</style>

       </div>
      
      {/* Embroidery Card */}
        <div className="relative pb-10">

       <div className="text-white text-[30px] font-bold text-start py-5 uppercase px-5 md:text-[70px] lg:text-[50px] sm:text-[70px]">
        <p>Embroidery Techniques</p>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-10 lg:px-20">

  <div className="group relative">
    <img src="/e1.jpg" alt="" className="w-full h-[250px] sm:h-[320px] lg:h-[400px] object-cover rounded-lg"/>
    <div className="absolute  bottom-6 left-1/2 -translate-x-1/2 text-white text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
      Satin Embroidery
    </div>
  </div>

  <div className="group relative">
    <img src="/e2.jpg" alt="" className="w-full h-[250px] sm:h-[320px] lg:h-[400px] object-cover rounded-lg"/>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
      Coloreel Embroidery
    </div>
  </div>

  <div className="group relative">
    <img src="/e3.jpg" alt="" className="w-full h-[250px] sm:h-[320px] lg:h-[400px] object-cover rounded-lg"/>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
      Embossed Embroidery
    </div>
  </div>

  <div className="group relative">
    <img src="/e4.jpg" alt="" className="w-full h-[250px] sm:h-[320px] lg:h-[400px] object-cover rounded-lg"/>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
      Felt Embroidery
    </div>
  </div>

  <div className="group relative">
    <img src="/e5.jpg" alt="" className="w-full h-[250px] sm:h-[320px] lg:h-[400px] object-cover rounded-lg"/>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
      Chenille Embroidery
    </div>
  </div>

  <div className="group relative">
    <img src="/e6.jpg" alt="" className="w-full h-[250px] sm:h-[320px] lg:h-[400px] object-cover rounded-lg"/>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
      Sequin Embroidery
    </div>
  </div>

</div>

      {/* ---------- DESKTOP MARQUEE ---------- */}
      {/* <div className="desktop-marquee w-full overflow-hidden py-2">
        <div className="marquee-track"  style={{ animationDuration: "70s" }}>

          {loopItems2.map((item, i) => (
            <div key={i} className="relative flex-shrink-0">

              <img
                src={item.img}
                alt={item.name}
                style={{
                  height: "clamp(250px, 40vh, 500px)",
                 width: "300px",
                  objectFit: "contain"
                }}
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-bold bg-black/40 px-3 py-1 rounded">
                {item.name}
              </div>

            </div>
          ))}

        </div>
      </div> */}


      {/* ---------- MOBILE SCROLL CAROUSEL ---------- */}
      {/* <div className="mobile-carousel">

        {items2.map((item, i) => (
          <div key={i} className="carousel-item">

            <img
              src={item.img}
              alt={item.name}
              className="carousel-img"
            />

            <div className="title">
              {item.name}
            </div>

          </div>
        ))}

      </div> */}


      <style>{`

      /* DESKTOP MARQUEE */

      .marquee-track{
        display:flex;
        gap:20px;
        animation: marquee-x 70s linear infinite;
        will-change: transform;
        width: max-content;
      }

      @keyframes marquee-x{
        0%{
          transform:translateX(0);
        }
        100%{
          transform:translateX(-100%);
        }
      }

      .marquee-track:hover{
        animation-play-state:paused;
      }


      /* MOBILE CAROUSEL */

      .mobile-carousel{
        display:none;
      }

      @media (max-width:768px){

        .desktop-marquee{
          display:none;
        }

        .mobile-carousel{
          display:flex;
          overflow-x:auto;
          gap:20px;
          padding:20px;
          scroll-snap-type:x mandatory;

          scrollbar-width:none;
          -ms-overflow-style:none;
        }

        .mobile-carousel::-webkit-scrollbar{
          display:none;
        }

        .carousel-item{
          flex:0 0 auto;
          scroll-snap-align:center;
          position:relative;
        }

        .carousel-img{
          height:320px;
          width:240px;
          object-fit:contain;
        }

        .title{
          position:absolute;
          bottom:20px;
          left:50%;
          transform:translateX(-50%);
          color:white;
          font-weight:bold;
          background:rgba(0,0,0,0.4);
          padding:6px 12px;
          border-radius:6px;
        }

      }

      `}</style>

       </div>
  {showForm && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

    <div className="bg-white rounded-lg relative w-full sm:max-w-xl md:max-w-2xl max-h-[80vh] overflow-y-auto ">

      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-4 text-xl font-bold text-gray-700 hover:text-white bg-black"
      >
        ✕
      </button>

      {/* HubSpot Form */}
      <div
        className="hs-form-frame max-w-xl mx-auto w-full min-h-[500px]"
        data-region="na2"
        data-form-id="a2dfc6ff-9c79-459c-9bcc-fdf12c54435b"
        data-portal-id="245488615"
      ></div>

    </div>

  </div>
)}


    </div>
  )
}