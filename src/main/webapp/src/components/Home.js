import React from "react";
import "./Home.css";
import '@brainhubeu/react-carousel/lib/style.css';
import CustomCarousel from "../common/mainPage/CustomCarousel";

export default function Home() {
    return (
        <div className="Home">
            <div className='home_center'>
                <CustomCarousel/>
            </div>
        </div>
    );
}