import React from "react";
import Grid from "@mui/material/Grid";
import image1 from "../BannerThird2/Images/1.png";
import image2 from "../BannerThird2/Images/2.png";
import image3 from "../BannerThird2/Images/3.png";
import image4 from "../BannerThird2/Images/4.png";
import image5 from "../BannerThird2/Images/ethereum2.svg";
import image6 from "../BannerThird2/Images/circleman.svg";
import style from "./bannerthird2.module.css";

const Bannerthird2 = () => {
  return (
    <div >
      <div className={style.bannercontainer}>
        <div>
          <h1>Top Favourite List</h1>
          <p>Last seven days</p>
        </div>
        <div>
          <Grid container spacing={1}>
            <Grid container item spacing={3}>
              <div className={style.parentDiv}>
                <div>
                  <h4>1</h4>
                </div>
                <div>
                  <img src={image6} alt="Image" />
                </div>
                <div>
                  <p>CryptoFunks</p>
                </div>
                <div className={style.numbertext}>
                  <p>+26.52%</p>
                </div>
              </div>
            </Grid>
            <Grid container item spacing={3}>
              <div className={style.parentDiv}>
                <div>
                  <h4>2</h4>
                </div>
                <div>
                  <img src={image6} alt="Image" />
                </div>
                <div>
                  <p>CryptoFunks</p>
                </div>
                <div className={style.numbertext}>
                  <p>+26.52%</p>
                </div>
              </div>
            </Grid>
            <Grid container item spacing={3}>
              <div className={style.parentDiv}>
                <div>
                  <h4>3</h4>
                </div>
                <div>
                  <img src={image6} alt="Image" />
                </div>
                <div>
                  <p>CryptoFunks</p>
                </div>
                <div className={style.numbertext}>
                  <p>+26.52%</p>
                </div>
              </div>
            </Grid>

            <Grid container item spacing={3}>
              <div className={style.parentDiv}>
                <div>
                  <h4>4</h4>
                </div>
                <div>
                  <img src={image6} alt="Image" />
                </div>
                <div>
                  <p>CryptoFunks</p>
                </div>
                <div className={style.numbertext}>
                  <p>+36.52%</p>
                </div>
              </div>
            </Grid>
            <Grid container item spacing={3}>
              <div className={style.parentDiv}>
                <div>
                  <h4>5</h4>
                </div>
                <div>
                  <img src={image6} alt="Image" />
                </div>
                <div>
                    
                  <p>CryptoFunks</p>
                   
                </div>
                <div className={style.numbertext}>
                  <p>+26.52%</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Bannerthird2;
