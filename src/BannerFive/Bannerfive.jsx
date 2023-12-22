import React from "react";
import Grid from "@mui/material/Grid";
import image1 from "../BannerFive/Images/1.png";
import image2 from "../BannerFive/Images/2.png";
import image3 from "../BannerFive/Images/3.png";
import image4 from "../BannerFive/Images/4.png";
import image5 from "../BannerFive/Images/5.png";
import svg1 from "../BannerFive/Images/Ellipse2.svg";
import svg2 from "../BannerFive/Images/Ellipse3.svg";
import style from "./bannerfive.module.css";

const Bannerfive = () => {
  return (
    <div>
      <div>
        <div className={style.container}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <div>
                <div className={style.firstimg}>
                  <div className={style.overlayContainer}>
                    <img src={svg1} alt="" className={style.overlayImg} />
                  </div>
                </div>

                <div className={style.secondimg}>
                <div className={style.overlayContainer}>
                    <img src={svg2} alt="" className={style.overlayImg2} />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
            <div>
                <div className={style.firstimg3}>
                  <div className={style.overlayContainer}>
                    <img src={svg2} alt="" className={style.overlayImg} />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>

                <div className={style.textdetails}>
                    <div className={style.margin}>
                        <h1>Create and <br /> sell your NFTs</h1>
                    </div>
                    <div className={style.margin}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Facilisi ac phasellus placerat a pellentesque 
                        tellus sed egestas.<br /> Et tristique dictum sit tristique sed non. 
                        <br />Lacinia lorem id consectetur <br />pretium diam ut. 
                        Pellentesque eu sit blandit fringilla risus faucibus.
                        </p>
                    </div>
                    <div >
                        <button className={style.signup}>Sign Up Now</button>
                    </div>
                </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Bannerfive;
