import style from '@/pages/home/Home.module.scss'
import ImageSpotLight from '@/assets/images/games/spotlight.png'
const SpotLight = () => {
    return (
        <>
            <div className={style.templateSpotlight} data-aos="fade-down">
                <div className={style.spotlightLabel}>
                    <h1>Spotlight : Marvel's Spider Man</h1>
                </div>
                <div className={style.subDescription} data-aos="fade-down">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className={style.spotLightImage} data-aos="fade-up">
                    <img src={ImageSpotLight} alt="" />
                </div>
            </div>
        </>
    )
}

export default SpotLight