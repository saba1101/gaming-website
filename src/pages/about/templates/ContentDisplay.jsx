import style from '@/pages/about/AboutUs.module.scss'
import Image from '@/assets/images/games/stray.png'
const ContentDisplay = () => {
    return (
        <>
            <div className={style.templateContentDisplay}>
                <div
                    className={style.imageWrapper}
                    data-aos="flip-down"
                >
                    <img src={Image} />
                </div>
                <div
                    className={style.contentDetails}
                    data-aos="flip-right"
                    data-aos-duration="1200"
                >
                    <h3>Lorem ipsum</h3>
                    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries,
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContentDisplay
