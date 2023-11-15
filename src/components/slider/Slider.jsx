import { useEffect, useState } from 'react';
import style from '@/components/slider/Slider.module.scss'; // Import CSS file for styling
import IconArrowDown from '@/assets/svgComponents/IconArrowDown'
const Slider = ({ images, autoPlay }) => {
    const [CurrentIndex, setCurrentIndex] = useState(0);
    const AutoPlayInterval = 3000

    const NextSlide = () => {
        const newIndex = (CurrentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    const PrevSlide = () => {
        const newIndex = (CurrentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const DeployAutoPlay = () => {
        setInterval(() => {
            NextSlide()
        }, AutoPlayInterval)
    }

    return (
        <div className={style.sliderContainer}>
            <div className={style.slider}>
                {images && images.map((image, index) => (
                    index === CurrentIndex ?
                        <div
                            key={index}
                            className={style.slide}
                        >
                            {<img src={image} />}
                        </div> : ''
                ))}
                <button className={style.previous} onClick={PrevSlide}>
                    <IconArrowDown />
                </button>
                <button className={style.next} onClick={NextSlide}>
                    <IconArrowDown />
                </button>
                <div className={style.slidesInfo}>
                    <span>
                        {
                            `${CurrentIndex + 1} Of ${images && images.length}`
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Slider;
