import React from "react";
import Grid from "@mui/material/Grid";
import image1 from "../BannerFirst/Images/1.png";
import image2 from "../BannerFirst/Images/2.png";
import image3 from "../BannerFirst/Images/3.png";
import svg1 from "../BannerFirst/Images/circleman.svg";
import svg3 from "../BannerFirst/Images/cirlceman.svg";
import svg2 from "../BannerFirst/Images/Ellipse.svg";
import style from "./bannerfirst.module.css";
import BannerSecond from "../BannerSecond/BannerSecond";

const BannerFirst = () => {
  return (
    <div>
      <Grid container spacing={2} columns={16}>

        
        <Grid item xs={8}>
          <div className={style.containers}>
            <h1>
              Discover, and collect <br /> Digital Art NFTs{" "}
            </h1>
            <p>
              Digital marketplace for crypto collectibles and <br />{" "}
              non-fungible tokens (NFTs). Buy, Sell, and discover <br />
              exclusive digital assets.
            </p>
            <div >
           

           <Grid container spacing={1}>
             <Grid container item spacing={1}>
             <button className={style.explore}>Explore Now</button>
           
        
             </Grid>
          
             <br />

             <div className={style.rowContainer}>
             <p>98K+ <br /> <span> Artwork</span>  </p>
             <p>15K+ <br /> <span> Auction</span>  </p>
             <p>12K+ <br /> <span> Artist</span>  </p>
           

             </div>
        
               
           </Grid>
         </div>
            
          </div>

         
        </Grid>
        <Grid item xs={8}>
          <div className={style.imgcontainer}>
            <div className={style.imageone}>
              <p>Abstr Gradient NFT</p>
              <div className={style.svgimg}>
                <img src={svg1} alt="#" />
                <p>Arkhan17</p>
              </div>

              <div className={style.ellipse}>
                <img src={svg3} alt="" />
              </div>

              <div className={style.svgimg2}>
                <div className={style.bid}>
                  Current bid <br />
                  <span>0.25 ETH</span>
                </div>

                <div className={style.endin}>
                  End In <br />
                  <span>12H 43m 42s</span>
                </div>
              </div>

              {/* <img src={image1} alt="Digital Art" height="400px" width="400px"/> */}
            </div>
            <div className={style.imagetwo}>
              {/* <img src={image2} alt="Digital Art"  height="400px" width="400px" /> */}
            </div>

            <div className={style.imagethree}>
              {/* <img src={image2} alt="Digital Art"  height="400px" width="400px" /> */}
            </div>
          </div>
        </Grid>
      </Grid>

    </div>
  );
};

export default BannerFirst;
