import React from "react";
import Grid from "@mui/material/Grid";
import cardtick from "../BannerSecond/Images/cardtick.svg";
import chartsquare from "../BannerSecond/Images/chartsquare.svg";
import style from "./bannersecond.module.css";

const BannerSecond = () => {
  return (
    <div>
      <div className={style.container}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4} >
            <h1 className={style.title}>
              The amazing NFT art <br /> of the world here
            </h1>
           
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div >
              <div className={style.flexRow}>
                <img src={cardtick} alt="" />
                <h3>Fast Transaction</h3>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit. Aliquam <br /> etiam viverra tellus imperdiet.
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div >
              <div className={style.flexRow}>
                <img src={chartsquare} alt="" />
                <h3>Fast Transaction</h3>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit. Aliquam <br /> etiam viverra tellus imperdiet.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BannerSecond;
