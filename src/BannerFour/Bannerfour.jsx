import React from "react";
import Grid from "@mui/material/Grid";
import image1 from "../BannerFour/Images/1.png";
import image2 from "../BannerFour/Images/2.png";
import image3 from "../BannerFour/Images/3.png";
import image4 from "../BannerFour/Images/4.png";
import style from "../BannerFour/bannerfour.module.css";

const Bannerfour = () => {
  return (
    <div className={style.container}>
      <div className={style.containerfour}>
        <div>
          <h1>Collection Featured NFTs</h1>
        </div>

        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <div className={style.parentDiv}>
                <div className={style.firstimg}>
                  <img src={image1} alt="" />
                </div>
                <div className={style.secondimg}>
                  <img src={image2} alt="" />
                  <img src={image3} alt="" />
                  <img src={image4} alt="" />
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
            <div className={style.parentDiv}>
                <div className={style.firstimg}>
                  <img src={image2} alt="" />
                </div>
                <div className={style.secondimg}>
                  <img src={image1} alt="" />
                  <img src={image3} alt="" />
                  <img src={image4} alt="" />
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
            <div className={style.parentDiv}>
                <div className={style.firstimg}>
                  <img src={image4} alt="" />
                </div>
                <div className={style.secondimg}>
                  <img src={image2} alt="" />
                  <img src={image1} alt="" />
                  <img src={image3} alt="" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Bannerfour;
