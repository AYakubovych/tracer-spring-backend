import React from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './CustomCarousel.css'
//IMG
import githubImg from '../../img/carousel/github.png';
import androidImg from '../../img/carousel/android.png';
import hibernateImg from '../../img/carousel/hibernate.png';
import postgresImg from '../../img/carousel/postgres.jpg';
import springImg from '../../img/carousel/spring.png';
import tomcatImg from '../../img/carousel/tomcat.jpg';
import ubuntuImg from '../../img/carousel/ubuntu.png';





export default function Home() {
    return (
        <div>
            <div>
                <Carousel
                    slidesPerPage={4}
                    dots
                    infinite
                    autoPlay={3000}
                    animationSpeed={2000}>

                    <div className="block">
                        <div className="img_block">
                            <img src={githubImg} width="250" height="250"/>
                        </div>
                        <h2 className="img_text">GitHub</h2>
                    </div>

                    <div className="block">
                        <div className="img_block">
                            <img src={androidImg} width="250" height="250"/>
                        </div>
                        <h2 className="img_text">Android API</h2>
                    </div>

                    <div className="block">
                        <div className="img_block">
                            <img src={hibernateImg} width="250" height="250"/>
                        </div>
                        <h2 className="img_text">Hibernate</h2>
                    </div>

                    <div className="block">
                        <div className="img_block">
                            <img src={postgresImg} width="250" height="250"/>
                        </div>
                        <h2 className="img_text">Postgres</h2>
                    </div>

                    <div className="block">
                        <div className="img_block">
                            <img src={springImg} width="250" height="250"/>
                        </div>
                        <h2 className="img_text">Spring</h2>
                    </div>

                    <div className="block">
                        <div className="img_block">
                            <img src={tomcatImg} width="250" height="250"/>
                        </div>
                        <h2 className="img_text">Tomcat</h2>
                    </div>

                    <div className="block">
                        <div className="img_block">
                            <img src={ubuntuImg} width="250" height="250"/>
                        </div>
                        <h2 className="img_text">Ubuntu</h2>
                    </div>

                </Carousel>
            </div>
        </div>
    );
}

