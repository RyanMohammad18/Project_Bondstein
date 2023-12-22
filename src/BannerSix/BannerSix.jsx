import React from "react";
import Grid from "@mui/material/Grid";
import style from "./bannersix.module.css";
import svgfilter from "./Images/filter.svg";
import Cards from "./Cards/Cards";

export const BannerSix = () => {
  return (
    <div>
      <div className={style.container}>
        <div>
          <h1 className={style.title}>Discover more NFTs</h1>
        </div>
        <div className={style.btns}>
          <div className={style.leftbtns}>
            <button>All Categories</button>
            <button>Art</button>
            <button>Celebrities</button>
            <button>Gaming Sports</button>
            <button>Music </button>
            <button> Crypto</button>
          </div>
          <div>
            <button className={style.filterBtnContainer}>
              <span>
                <img src={svgfilter} alt="" className={style.svgfilter} />
              </span>
              Filter
            </button>
          </div>
        </div>

        <div>
          <Grid container spacing={4}>
            <Grid container item spacing={1}>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Grid>
            <Grid container item xs={12} spacing={3}>
            <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Grid>
            <Grid container item spacing={3}>
            <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Grid>
          </Grid>

          
        </div>
        <div className={style.btncontainer}>

        <button className={style.more}>More NFTs</button>

        </div>

       
        
      </div>
    </div>
  );
};
