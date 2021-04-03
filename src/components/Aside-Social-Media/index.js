import React, { useState } from "react";

import "./styles.css"

const AsideSocialMedia = () => {
    const [follow, setFollow] = useState(false);
  const changeTextColor = () => {
    if (window.scrollY >= 634 &&  window.scrollY < 3404 && window.innerHeight > 550) {
      setFollow(true);
    } else {
      setFollow(false);
    }
  };

  window.addEventListener("scroll", changeTextColor);

    return (
        <div className="div-social-media">
        <div className="div-social-media-follow">
        
            <svg
            width="15"
            height="83"
            viewBox="0 0 15 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5643 7.99994L11.5303 7.99994L11.5303 2.76194L8.30831 2.76194L8.30831 6.77594L6.31031 6.77594L6.31031 2.76194L1.00031 2.76194L1.00031 0.241944L13.5643 0.241943L13.5643 7.99994Z"
              className={follow ? "ou" : "white"}
            />
            <path
              d="M0.838313 14.2149C0.838313 13.2549 1.04831 12.3909 1.46831 11.6229C1.90031 10.8549 2.50631 10.2489 3.28631 9.80487C4.06631 9.37287 4.96631 9.15687 5.98631 9.15687C7.00631 9.15687 7.90631 9.37886 8.68631 9.82286C9.46631 10.2789 10.0663 10.8969 10.4863 11.6769C10.9183 12.4569 11.1343 13.3269 11.1343 14.2869C11.1343 15.2469 10.9183 16.1169 10.4863 16.8969C10.0663 17.6769 9.46631 18.2889 8.68631 18.7329C7.90631 19.1889 7.00631 19.4169 5.98631 19.4169C4.96631 19.4169 4.06631 19.1829 3.28631 18.7149C2.50631 18.2589 1.90031 17.6349 1.46831 16.8429C1.04831 16.0629 0.838313 15.1869 0.838313 14.2149ZM3.03431 14.2149C3.03431 14.6709 3.14231 15.0969 3.35831 15.4929C3.58631 15.9009 3.92231 16.2249 4.36631 16.4649C4.81031 16.7049 5.35031 16.8249 5.98631 16.8249C6.93431 16.8249 7.66031 16.5729 8.16431 16.0689C8.68031 15.5769 8.93831 14.9709 8.93831 14.2509C8.93831 13.5309 8.68031 12.9249 8.16431 12.4329C7.66031 11.9529 6.93431 11.7129 5.98631 11.7129C5.03831 11.7129 4.30631 11.9469 3.79031 12.4149C3.28631 12.8949 3.03431 13.4949 3.03431 14.2149Z"
              className={follow ? "ou" : "white"}
            />
            <path
              d="M14.3203 23.7854L1.00031 23.7854L1.00031 21.2654L14.3203 21.2654L14.3203 23.7854Z"
              className={follow ? "ou" : "white"}
            />
            <path
              d="M14.3203 28.7951L1.00031 28.7951L1.00031 26.2751L14.3203 26.2751L14.3203 28.7951Z"
              className={follow ? "ou" : "white"}
            />
            <path
              d="M0.838314 35.7129C0.838314 34.7529 1.04831 33.8889 1.46831 33.1209C1.90031 32.3529 2.50631 31.7469 3.28631 31.3029C4.06631 30.8709 4.96631 30.6549 5.98631 30.6549C7.00631 30.6549 7.90631 30.8769 8.68631 31.3209C9.46631 31.7769 10.0663 32.3949 10.4863 33.1749C10.9183 33.9549 11.1343 34.8249 11.1343 35.7849C11.1343 36.7449 10.9183 37.6149 10.4863 38.3949C10.0663 39.1749 9.46631 39.7869 8.68631 40.2309C7.90631 40.6869 7.00631 40.9149 5.98631 40.9149C4.96631 40.9149 4.06631 40.6809 3.28631 40.2129C2.50631 39.7569 1.90032 39.1329 1.46831 38.3409C1.04831 37.5609 0.838314 36.6849 0.838314 35.7129ZM3.03431 35.7129C3.03431 36.1689 3.14231 36.5949 3.35831 36.9909C3.58631 37.3989 3.92231 37.7229 4.36631 37.9629C4.81031 38.2029 5.35031 38.3229 5.98631 38.3229C6.93431 38.3229 7.66031 38.0709 8.16431 37.5669C8.68031 37.0749 8.93831 36.4689 8.93831 35.7489C8.93831 35.0289 8.68031 34.4229 8.16431 33.9309C7.66031 33.4509 6.93431 33.2109 5.98631 33.2109C5.03831 33.2109 4.30631 33.4449 3.79032 33.9129C3.28632 34.3929 3.03431 34.9929 3.03431 35.7129Z"
              className={follow ? "ou" : "white"}
            />
            <path
              d="M10.9723 56.5874L1.00032 53.6714L1.00032 50.9534L7.96632 49.1354L1.00031 47.3174L1.00031 44.5814L10.9723 41.6474L10.9723 44.2034L3.37631 45.9674L10.9723 47.8754L10.9723 50.5394L3.39431 52.4114L10.9723 54.1754L10.9723 56.5874Z"
              className={follow ? "ou" : "white"}
            />
            <path
              d="M13.5643 64.724L5.78832 64.724C4.93632 64.724 4.28232 64.946 3.82632 65.39C3.38232 65.834 3.16032 66.458 3.16032 67.262C3.16032 68.078 3.38232 68.708 3.82632 69.152C4.28232 69.596 4.93632 69.818 5.78832 69.818L13.5643 69.818L13.5643 72.356L5.80632 72.356C4.73832 72.356 3.83231 72.122 3.08832 71.654C2.35631 71.198 1.80431 70.58 1.43232 69.8C1.06032 69.032 0.874316 68.174 0.874316 67.226C0.874316 66.29 1.06032 65.438 1.43231 64.67C1.80431 63.914 2.35631 63.314 3.08831 62.87C3.83231 62.426 4.73832 62.204 5.80632 62.204L13.5643 62.204L13.5643 64.724Z"
              className={follow ? "ou" : "white"}
            />
            <path
              d="M0.838316 78.6068C0.838316 77.7908 0.982317 77.0588 1.27032 76.4108C1.57032 75.7628 1.97232 75.2468 2.47632 74.8628C2.98032 74.4908 3.53832 74.2868 4.15032 74.2508L4.15032 76.7888C3.76632 76.8368 3.44832 77.0228 3.19632 77.3468C2.94432 77.6828 2.81832 78.0968 2.81832 78.5888C2.81832 79.0688 2.91432 79.4408 3.10632 79.7048C3.29832 79.9808 3.54432 80.1188 3.84432 80.1188C4.16832 80.1188 4.40832 79.9508 4.56432 79.6148C4.73232 79.2908 4.91232 78.7688 5.10432 78.0488C5.28432 77.3048 5.47032 76.6928 5.66231 76.2128C5.85432 75.7448 6.14832 75.3368 6.54432 74.9888C6.94032 74.6528 7.47432 74.4848 8.14632 74.4848C8.69832 74.4848 9.20232 74.6408 9.65832 74.9528C10.1143 75.2768 10.4743 75.7328 10.7383 76.3208C11.0023 76.9208 11.1343 77.6228 11.1343 78.4268C11.1343 79.6148 10.8343 80.5628 10.2343 81.2708C9.64632 81.9788 8.84832 82.3688 7.84032 82.4408L7.84032 80.0288C8.23632 79.9928 8.54832 79.8248 8.77632 79.5248C9.01632 79.2368 9.13632 78.8468 9.13632 78.3548C9.13632 77.8988 9.05232 77.5448 8.88432 77.2928C8.71632 77.0528 8.48232 76.9328 8.18232 76.9328C7.84632 76.9328 7.58832 77.1008 7.40832 77.4368C7.24032 77.7728 7.06632 78.2948 6.88632 79.0028C6.70632 79.7228 6.52032 80.3168 6.32832 80.7848C6.13632 81.2528 5.83632 81.6548 5.42832 81.9908C5.03232 82.3388 4.50432 82.5188 3.84432 82.5308C3.26832 82.5308 2.75232 82.3688 2.29632 82.0448C1.84032 81.7328 1.48032 81.2768 1.21632 80.6768C0.964316 80.0888 0.838316 79.3988 0.838316 78.6068Z"
              className={follow ? "ou" : "white"}
            />
          </svg>
        </div>
        <div className="div-social-media-line">
          <svg className="line-social-media"
            width="3"
            height="174"
            viewBox="0 0 3 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              className={follow ? "ou1" : ""}
              x1="1.61914"
              y1="1"
              x2="1.61915"
              y2="173"
              stroke={follow ? "black" : "white"}
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
  
        </div>
        <div className="div-social-media-imgs"></div>
        {/* /Facebook svg/ */}
        <a href="http://www.instagram.com/casanovabuilders" rel="noreferrer" target="_blank">
             <svg
            className={follow ? "ou" : "white"}
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M9.61089 3.48687H11.6191V0.147875C11.2727 0.102375 10.0811 0 8.69339 0C5.79788 0 3.81437 1.73862 3.81437 4.93412V7.875H0.619141V11.6077H3.81437V21H7.73188V11.6086H10.7979L11.2846 7.87587H7.73096V5.30425C7.73188 4.22537 8.03619 3.48687 9.61089 3.48687Z" />
          </svg>
            </a>
  
            <a href="http://www.facebook.com" rel="noreferrer" target="_blank">
          <svg className="instagram-icon" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.519 0H6.71931C3.35566 0 0.619141 2.73652 0.619141 6.10017V14.8998C0.619141 18.2635 3.35566 21 6.71931 21H15.519C18.8826 21 21.6191 18.2635 21.6191 14.8999V6.10017C21.6191 2.73652 18.8826 0 15.519 0ZM19.9785 14.8998C19.9785 17.3588 17.978 19.3594 15.519 19.3594H6.71931C4.2603 19.3594 2.25977 17.3588 2.25977 14.8999V6.10017C2.25977 3.64116 4.2603 1.64062 6.71931 1.64062H15.519C17.978 1.64062 19.9785 3.64116 19.9785 6.10017V14.8998Z"  className={follow ? "ou" : "white"}/>
  <path d="M11.1191 4.83972C7.9981 4.83972 5.45898 7.37883 5.45898 10.4999C5.45898 13.6209 7.9981 16.16 11.1191 16.16C14.2402 16.16 16.7793 13.6209 16.7793 10.4999C16.7793 7.37883 14.2402 4.83972 11.1191 4.83972ZM11.1191 14.5194C8.90278 14.5194 7.09961 12.7162 7.09961 10.4999C7.09961 8.28352 8.90278 6.48035 11.1191 6.48035C13.3355 6.48035 15.1387 8.28352 15.1387 10.4999C15.1387 12.7162 13.3355 14.5194 11.1191 14.5194Z"  className={follow ? "ou" : "white"}/>
  <path d="M16.8613 5.57812C17.3144 5.57812 17.6816 5.21086 17.6816 4.75781C17.6816 4.30477 17.3144 3.9375 16.8613 3.9375C16.4083 3.9375 16.041 4.30477 16.041 4.75781C16.041 5.21086 16.4083 5.57812 16.8613 5.57812Z"  className={follow ? "ou" : "white"}/>
  </svg>
  </a>
  
  {/* HOUZZ NOT APPLIED YET */}
  {/* <svg classNam="houzz-icon" width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path classNam="houzz-icon" d="M8.51473 0.116597C8.30211 -0.0167587 8.03408 -0.0368338 7.80199 0.0621076L1.06386 2.92997C0.792835 3.04612 0.619141 3.30136 0.619141 3.58528V17.9246C0.619141 18.167 0.746417 18.3935 0.96054 18.5254C1.08332 18.6029 1.22557 18.6416 1.36782 18.6416C1.47114 18.6416 1.57446 18.6201 1.67179 18.5799L8.40992 15.7121C8.68094 15.5973 8.85464 15.3392 8.85464 15.0567V0.717415C8.85464 0.47508 8.72736 0.249953 8.51473 0.116597ZM7.35727 14.5907L2.1165 16.8219V4.05131L7.35727 1.82154V14.5907Z" className={follow ? "ou" : "white"}/>
  <path classNam="houzz-icon" d="M15.253 4.41848C15.0404 4.28512 14.7724 4.26505 14.5403 4.36399L7.80214 7.23185C7.53112 7.348 7.35742 7.60324 7.35742 7.88716V22.2265C7.35742 22.4688 7.4847 22.6954 7.69882 22.8273C7.8216 22.9047 7.96385 22.9435 8.1061 22.9435C8.20942 22.9435 8.31274 22.922 8.41007 22.8818L15.1482 20.0139C15.4192 19.8992 15.5929 19.6411 15.5929 19.3586V5.0193C15.5929 4.77696 15.4656 4.55183 15.253 4.41848ZM14.0956 18.8926L8.85478 21.1238V8.35319L14.0956 6.12342V18.8926Z" className={follow ? "ou" : "white"}/>
  <path classNam="houzz-icon" d="M15.2079 10.8467L8.46981 7.26043C8.24071 7.13998 7.9667 7.13855 7.74209 7.26043L1.00396 10.8453C0.767379 10.9715 0.619141 11.2109 0.619141 11.4719C0.619141 11.7329 0.767379 11.9723 1.00396 12.1L7.74209 15.6848C7.85589 15.7436 7.98167 15.7737 8.10595 15.7737C8.23173 15.7737 8.35601 15.7436 8.46981 15.6848L15.2079 12.1014C15.4445 11.9738 15.5928 11.7343 15.5928 11.4733C15.5928 11.2124 15.4445 10.9729 15.2079 10.8467ZM8.10595 14.2365L2.9101 11.4719L8.10595 8.70727L13.3033 11.4733L8.10595 14.2365Z" className={follow ? "ou" : "white"}/>
  </svg> */}
  
      </div>
    )
}

export default AsideSocialMedia;
