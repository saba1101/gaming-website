import ImageMap from '@/assets/svgComponents/ImageMap'
import style from '@/pages/contact/ContactUs.module.scss'

const ContactUs = () => {
    return (
        <>
            <section className={style.contactMap}>
                <div className={style.commonDetails}>
                    <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
                    <p data-aos="fade-up">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div
                        className={style.map}
                        data-aos="zoom-in"
                    >
                        <ImageMap />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
