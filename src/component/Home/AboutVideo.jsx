import { useState } from "react";
import { FaPlay } from "react-icons/fa";



const AboutVideo = () => {

  return (
    <>


      {/* SECTION */}
     <section
  className="ftco-section ftco-about img relative"
  style={{ backgroundImage: "url(images/bg_4.jpg)" }}
>
  <div className="overlay absolute inset-0 bg-black/40"></div>

  <div className="container py-md-5 relative z-10">
    <div className="row py-md-5">
      
      <div className="col-md d-flex align-items-center justify-content-center">
        
        {/* Fake Play Button (UI only) */}
 
             <a
                        href="https://vimeo.com/45830194"
                        className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
                      >
                        <span><FaPlay/></span>
                      </a>
          
   

      </div>

   

    </div>
  </div>
</section>
    </>
  );
};

export default AboutVideo;
