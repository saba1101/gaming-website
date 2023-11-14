import style from '@/pages/about/AboutUs.module.scss'
import AboutIntro from './templates/AboutIntro'
const AboutUs = () => {
    return (
        <>
            <section className={`${style.sectionAboutUsIntro} routerTransition`}>
                <AboutIntro />
            </section>
        </>
    )
}

export default AboutUs