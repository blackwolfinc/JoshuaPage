import React from 'react'
import "./VidioPlane.scss"
import VidioTv from "../../../assets/Vidio/PlaneVidio.mp4"

export const VidioPlane = (props) => {
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
        <div className="VidContainer3">
      <img
        src={VidioTv}
        className="VidVideo-thumb3 tiny3"
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
