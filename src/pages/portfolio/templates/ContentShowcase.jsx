import style from '@/pages/portfolio/Portfolio.module.scss'
import Button from '@/components/button/Button.jsx'

const ContentShowcase = ({ ImageSrc }) => {
    return (
        <>
            <div
                className={style.templateContentShowcase}
                data-aos="flip-up"
            >
                <div className={style.details}>
                    <h1>Lorem Ipsum is simply dummy text dummy text </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries,
                    </p>
                    <div className={style.readMore}>
                        <Button
                            radius={'0'}
                            label={'Read more'}
                        />
                    </div>
                </div>
                <div className={style.imageContent}>
                    <img src={ImageSrc} />
                </div>
            </div>
        </>
    )
}
export default ContentShowcase
