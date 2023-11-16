import style from '@/pages/home/Home.module.scss'
import ImageHomeSketch from '@/assets/images/homeSketch.png'
import Button from '@/components/button/Button.jsx'
import ScrollButton from '@/components/scrollButton/ScrollButton'
const HomeIntro = () => {
    return (
        <>
            <div className={style.homeIntro}>
                <div className={style.contentWrapper}>
                    <div
                        data-aos="fade-right"
                        className={style.leftSide}
                    >
                        <h5>Proved By @Blitz</h5>
                        <h1>Work that we produce for our clients</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        <Button label={'Get more details'} />
                    </div>
                    <div
                        data-aos="fade-left"
                        className={style.rightSide}
                    >
                        <div className={style.imagePlaceholder}>
                            <div className={style.imageWrapper}>
                                <img
                                    src={ImageHomeSketch}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.scroller}>
                    <ScrollButton />
                </div>
            </div>
        </>
    )
}

export default HomeIntro
