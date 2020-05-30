import React from "react";
import "./Home.css";
import '@brainhubeu/react-carousel/lib/style.css';
import CustomCarousel from "../common/mainPage/CustomCarousel";
import logoImg from '../img/logo.jpg';
import androidImg from "../img/carousel/android.png";

export default function Home() {
    return (
        <div className="Home">
            <div className='home_center'>
                <img src={logoImg} width="350" height="350"/>
                <CustomCarousel/>
            </div>
        </div>
    );
}