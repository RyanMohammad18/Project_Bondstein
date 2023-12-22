import React from "react";
import Grid from "@mui/material/Grid";
import cardtick from "../BannerSecond/Images/cardtick.svg";
import circleman from "../BannerThird/Images/circleman.svg";
import image1 from "../BannerThird/Images/1.png";
import image2 from "../BannerThird/Images/2.png";
import image3 from "../BannerThird/Images/3.png";
import image4 from "../BannerThird/Images/4.png";
import image5 from "../BannerThird/Images/ethereum2.svg";
import style from "./bannerthird.module.css";
import Bannerthird2 from "./BannerThird2/Bannerthird2";

const Bannerthird = () => {
  return (
    <div>
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <div>
              <div>
                <img src={image1} className={style.image1} />
                <div>
                  <div className={style.container}>
                    <div className={style.textContainer}>
                      <img src={circleman} alt="" />
                      <div className={style.text}>
                        <h4>The Futr Abstr</h4>
                        <p>10 in the stock</p>
                      </div>
                    </div>
                    <div className={style.bid}>
                      <p>Highest Bid</p>
                      <h5>976 ETH</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={style.containers}>
              <Grid container spacing={1}>
                <Grid container item spacing={3}>
                  <div>
                    <div className={style.container2}>
                      <div className={style.image2}>
                        <img src={image2} alt="" />
                      </div>
                      <div className={style.imgdetails}>
                      <h4>The future abstr</h4>

                        <span className={style.bidContainer}>
                    
                          <img src={circleman} alt="" />
                          <button>
                            {" "}
                            <img
                              src={image5}
                              alt=""
                              className={style.image5}
                            />{" "}
                            0.25 ETH
                          </button>
                          <p>1 to 8</p>
                        </span>

                        <div className={style.place}>
                          <button>Place a bid</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid container item spacing={3}>
                  <div className={style.container3}>
                    <div className={style.container2}>
                      <div className={style.image2}>
                        <img src={image3} alt="" />
                      </div>
                      <div className={style.imgdetails}>
                      <h4>The future abstr</h4>

                        <span className={style.bidContainer}>
                    
                          <img src={circleman} alt="" />
                          <button>
                            {" "}
                            <img
                              src={image5}
                              alt=""
                              className={style.image5}
                            />{" "}
                            0.25 ETH
                          </button>
                          <p>1 to 8</p>
                        </span>

                        <div className={style.place}>
                          <button>Place a bid</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid container item spacing={3}>
                  <div className={style.container3}>
                    <div className={style.container2}>
                      <div className={style.image4}>
                        <img src={image4} alt="" />
                      </div>
                      <div className={style.imgdetails}>
                      <h4>The future abstr</h4>

                        <span className={style.bidContainer}>
                    
                          <img src={circleman} alt="" />
                          <button>
                            {" "}
                            <img
                              src={image5}
                              alt=""
                              className={style.image5}
                            />{" "}
                            0.25 ETH
                          </button>
                          <p>1 to 8</p>
                        </span>

                        <div className={style.place}>
                          <button>Place a bid</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div>
                <Bannerthird2/>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Bannerthird;
