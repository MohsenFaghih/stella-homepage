import React, { useState, useEffect, useReducer } from "react";
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const Slider = ({list}) => {
    return(
        <Grid container>
            <Swiper
                spaceBetween={30}
                slidesPerView={1.2}
                breakpoints= {{
                    499: {slidesPerView: 2.2,spaceBetweenSlides: 10},
                    999: {slidesPerView: 3.3,spaceBetweenSlides: 10}
                }}
                loop={true}
                >
                {list.map(item=>(
                    <SwiperSlide key={item.key}><FeaturedCard item={item}/></SwiperSlide>
                ))}
            </Swiper>
        </Grid>
    )
};

export default Slider;
