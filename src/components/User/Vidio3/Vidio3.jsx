import React from 'react'
import "./Vidio3.scss"
import VidioTv from "../../../assets/Vidio/AnimationAbout.mp4"

export const Vidio3 = (props) => {
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
        <div className="VidContainer4">
      <img
        src={VidioTv}
        className="VidVideo-thumb2 tiny3"
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
