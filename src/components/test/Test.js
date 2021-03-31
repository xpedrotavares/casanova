import React, { useEffect } from "react";
import $ from "jquery";

import { SlideShowContainer, StarImage, TestimonialsStarSection } from "./TestElements";
import Star from '../../images/star.png'

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow > div:first")
    .fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow");
}, 9000);
const Test = () => {



  return (
    <SlideShowContainer>

      <div id="slideshow">
 
        <div>
        <TestimonialsStarSection>

<StarImage src={Star}></StarImage>
<StarImage src={Star}></StarImage>
<StarImage src={Star}></StarImage>
<StarImage src={Star}></StarImage>
</TestimonialsStarSection>
          <p>
            We were beyond thrilled to see our vision come true! CasaNova was a
            delight to work with, through and through. From the initial contact
            with Jess and Chris, to seeing everything come together! They
            promised timely delivery, open communication, and amazing results,
            which is exactly what we got; all while answering all our million
            questions. Would definitely recommend CasaNova to anyone considering
            remodeling their kitchen or bathroom!
          </p>
          <p className="quote-author">Simone N.</p>
        </div>
        <div>
        <TestimonialsStarSection>

<StarImage src={Star}></StarImage>
<StarImage src={Star}></StarImage>
<StarImage src={Star}></StarImage>
<StarImage src={Star}></StarImage>
</TestimonialsStarSection>
          <p>
            What an absolute delight it was to work with CasaNova. I have gone
            through renovations before and I know how stressful it can be - so
            that’s what I was expecting, but boy was I surprised! CasaNova made
            the whole process so easy and they finished on time like promised,
            no surprises. I had spoken to a few other contractors and got a few
            different bids to revamp my kitchen. CasaNova was right in the
            middle and had been recommended by my neighbor so I chose to go with
            them. I would recommend CasaNova to anyone who wants a professional,
            quick and trustworthy team working on their homes!
          </p>
          <p className='quote-author'>Elizabeth L.</p>
        </div>
      </div>
    </SlideShowContainer>
  );
};

export default Test;
