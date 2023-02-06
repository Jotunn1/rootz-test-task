import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { ReactComponent as Chevron } from "../../../assets/chevron.svg";

import "swiper/css";

const SliderSection = () => {
    const [realIndex, setRealIndex] = useState(0);
    const swiperRef = useRef(null);

    const sliderInfo = [
        {
            title: "Save watter",
            subtitle:
                "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        },
        {
            title: "Avoid plastic",
            subtitle:
                "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        },
        {
            title: "Save energy",
            subtitle:
                "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        },
        {
            title: "Save watter",
            subtitle:
                "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        },
        {
            title: "Avoid plastic",
            subtitle:
                "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        },
        {
            title: "Choose organic",
            subtitle:
                "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        },
    ];
    return (
        <section className={styles.slider}>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={20}
                loop={true}
                onRealIndexChange={(e) => setRealIndex(e.realIndex)}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    530: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                {sliderInfo.map((el, index) => {
                    return (
                        <SwiperSlide
                            key={Math.random()}
                            className="slider-card"
                        >
                            <img
                                src={require("../../../assets/slider/slider-card-bg.png")}
                                alt="slider-bg"
                                className="bg"
                            />
                            <img
                                className="image"
                                src={require(`../../../assets/slider/${index}.png`)}
                                alt={el.title}
                            />
                            <h5 className="title-h5">{el.title}</h5>
                            <p className="text-t1">{el.subtitle}</p>
                        </SwiperSlide>
                    );
                })}

                <div className="controls">
                    <Chevron
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="cta chevron"
                    />
                    <div className="title-h5">
                        {realIndex + 1}
                        <span> / {sliderInfo.length}</span>
                    </div>
                    <Chevron
                        onClick={() => swiperRef.current?.slideNext()}
                        className="cta chevron"
                    />
                </div>
            </Swiper>
        </section>
    );
};

export default SliderSection;
