import style from '@/pages/about/AboutUs.module.scss'

import Slider from '../../../components/slider/Slider'
import SliderImage1 from '@/assets/images/games/lol.png'
import SliderImage2 from '@/assets/images/games/stray.png'
import SliderImage3 from '@/assets/images/games/crysis.png'
import SliderImage4 from '@/assets/images/games/forHonor.png'
import Button from '@/components/button/Button.jsx'

import { useEffect, useState } from 'react'


const AboutIntro = () => {
    const [SliderImages, setSliderImages] = useState()

    useEffect(() => {
        setSliderImages(
            [SliderImage1, SliderImage2, SliderImage3, SliderImage4]
        )
    }, [])
    return (
        <>
            <div className={style.templateAboutIntro}>
                <div className={style.leftSide} data-aos="fade-right">
                    <h1>
                        Lorem Ipsum is simply dummy text of the printing and.
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                    </p>
                    <Button label={'Get in touch'} radius={'2px'} />
                </div>
                <div className={style.sliderPlaceholder} data-aos="fade-left">
                    <Slider images={SliderImages} autoPlay={true} />
                </div>
            </div>
        </>
    )
}

export default AboutIntro