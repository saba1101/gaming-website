import style from '@/pages/portfolio/Portfolio.module.scss'
import OverView from './templates/OverView'
import Launch from './templates/Launch'
import ContentShowcase from './templates/ContentShowcase'
import Image1 from '@/assets/images/games/lol.png'
import Image2 from '@/assets/images/games/stray.png'
import Image3 from '@/assets/images/games/crysis.png'
import Image4 from '@/assets/images/games/forHonor.png'
import { useEffect, useState } from 'react'

const Portfolio = () => {
    const [Images, setImages] = useState([])

    useEffect(() => {
        setImages([Image1, Image2, Image3, Image4])
    }, [])
    return (
        <>
            <section className={style.sectionOverView}>
                <OverView />
            </section>
            <section className={style.sectionLaunch}>
                <Launch />
            </section>
            <section className={style.sectionContentShowcase}>
                {Images &&
                    Images.map((img, index) => {
                        return (
                            <ContentShowcase
                                key={index}
                                ImageSrc={img}
                            />
                        )
                    })}
            </section>
        </>
    )
}

export default Portfolio
