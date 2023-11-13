import style from '@/pages/home/Home.module.scss'
import img1 from '@/assets/images/showcase/showcase1.png'
import img2 from '@/assets/images/showcase/showcase2.png'
import img3 from '@/assets/images/showcase/showcase3.png'
import img4 from '@/assets/images/showcase/showcase4.png'
import img5 from '@/assets/images/showcase/showcase5.png'
import img6 from '@/assets/images/showcase/showcase6.png'
import { useEffect, useState } from 'react'

const GamingShowcase = () => {
    const [ShowCaseImages, setShowCaseImages] = useState([])

    useEffect(() => {
        setShowCaseImages([img1, img2, img3, img4, img5, img6])
    }, [])
    return (
        <>
            <div className={style.templateGamingShowcase}>
                <h1>Gaming ShowCase</h1>
                <p>
                    Immerse Yourself in Excellence. A curated collection of captivating visuals and innovative gaming spaces, offering a glimpse into the future of immersive gaming environments. Elevate your gaming experience with our exclusive properties—where technology meets entertainment, and every pixel tells a story.
                </p>
                <ul className={style.showcaseImages}>
                    {
                        ShowCaseImages.map((image, index) => {
                            return (
                                <li key={index} data-aos="zoom-in">
                                    <img src={image} alt="" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default GamingShowcase