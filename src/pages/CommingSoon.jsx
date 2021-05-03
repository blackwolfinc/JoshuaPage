import React from 'react'
import "../assets/Css/Commingsoon.scss"
import pat5 from "../assets/images/logos/Patner/pat5.png"
import { Crausel } from "../components/User/Crausel/Crausel";
import { Background2 } from "../components/Background/Background2";
import { Count } from '../components/User/Count/Count';

export const CommingSoon = () => {
    return (
        <div className="CMSContainer">
        <Background2/>
          <div  
    
         className="CMSHeader">
            <h1>
              {" "}
               we will be
              <span className="text-green ">  COMING SOON</span>
            </h1>
          </div>
          <div className="CMSBody">
                <div className="CMSBodyKiri">
                    <img src={pat5}/>
                </div>
                <div className="CMSBodyKanan">
                    <div className="CMSBodyKananAtas">

                  </div>
                    <div className="CMSBodyKananTengah">
                    <Count/>
                        {/* <Crausel/> */}
                    </div>
                   
                </div>
    
          </div>
        </div>
    )
}
