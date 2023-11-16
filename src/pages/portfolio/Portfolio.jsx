import style from '@/pages/portfolio/Portfolio.module.scss'
import OverView from '@/pages/portfolio/templates/OverView'
import Launch from '@/pages/portfolio/templates/Launch'
import ContentShowcase from '@/pages/portfolio/templates/ContentShowcase'
import Customers from '@/pages/portfolio/templates/Customers'
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
            <section className={style.sectionCustomers}>
                <Customers />
            </section>
        </>
    )
}

export default Portfolio
