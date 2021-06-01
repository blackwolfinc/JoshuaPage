import React from 'react'
import "./Vidio2.scss"
import VidioTv from "../../../assets/Vidio/UT Website Animations_02_01 Original Size.mp4"

export const Vidio2 = (props) => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  



    // const getVideoSrc = width => {
    //     if (width >= 1080) return desktopVideo;
    //     if (width >= 720) return tabletVideo;
    //     return mobileVideo;
    //   };

      
    const onLoadedData = () => {
        setIsVideoLoaded(true);
      };
    
    return (
        <div className="VidContainer2">
      <img
        src={VidioTv}
        className="VidVideo-thumb2 tiny2"
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video
        autoPlay
        loop="true"
        playsInline
        muted
        src={VidioTv}
        onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      />
    </div>
    )
}
