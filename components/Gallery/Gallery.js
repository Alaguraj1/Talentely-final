import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

// import GalleryData from "../../data/elements/gallery.json";

const Gallery = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".child-gallery-single",
        numeration: true,
        infinigall: true,
        spinner: "rotating-plane",
      });
    });
  }, []);

  
   const GalleryData = [
      {
        "img": "/images/Gallery-image/1.jpg"
      },
      {
        "img": "/images/Gallery-image/2.jpg"
      },
      {
        "img": "/images/Gallery-image/3.jpg"
      },
      {
        "img": "/images/Gallery-image/4.jpg"
      },
      {
        "img": "/images/Gallery-image/5.jpg"
      },
      {
        "img": "/images/Gallery-image/6.jpg"
      },
      {
        "img": "/images/Gallery-image/7.jpg"
      },
      {
        "img": "/images/Gallery-image/8.jpg"
      },
      {
       "img": "/images/Gallery-image/9.jpg"
      },
      {
        "img": "/images/Gallery-image/10.jpg"
      },
      {
        "img": "/images/Gallery-image/11.jpg"
      },
      {
        "img": "/images/Gallery-image/12.jpg"
      },
      {
        "img": "/images/Gallery-image/13.jpg"
      },
      {
        "img": "/images/Gallery-image/14.jpg"
      },
      {
        "img": "/images/Gallery-image/15.jpg"
      },
      {
        "img": "/images/Gallery-image/16.jpg"
      },
      {
        "img": "/images/Gallery-image/17.jpg"
      },
      {
        "img": "/images/Gallery-image/18.jpg"
      },
      {
        "img": "/images/Gallery-image/19.jpg"
      },   
      {
        "img": "/images/Gallery-image/20.jpg"
      },   
     
    ]
  
  
  return (
    <>
        <div className="section-title text-center  mt-5">
                {/* <span className="subtitle bg-primary-opacity ">
                  Excellence in Learning
                </span> */}
                <h2 className="title sectionHeading ">Our Placement Records</h2>
                {/* <p className="description has-medium-font-size mt--20 mb--0">
                TALENTELY has 3 components, LMS – Learning Management System, PMS – Profile Management System and TMS – Talent Management System.
                </p> */}
        </div>

        <div className="row g-5 parent-gallery-container px-5 py-5 mb-5">
     
     {GalleryData &&
       GalleryData?.map((data, index) => (
         <Link
           className="child-gallery-single col-lg-2 col-md-4 col-sm-6 col-6 pt-5"
           key={index}
           href={`${data.img}`}
           data-gall="gallery01"
         >
           <div className="rbt-gallery">
             <Image
               className="w-100"
               src={data.img}
               width={253}
               height={274}
               alt="Gallery Images"
             />
           </div>
         </Link>
       ))}
   </div>
    </>
   
  );
};

export default Gallery;
