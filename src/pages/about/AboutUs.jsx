import style from '@/pages/about/AboutUs.module.scss'
import AboutIntro from './templates/AboutIntro'
import WorkWithUs from './templates/WorkWithUs'
const AboutUs = () => {
    return (
        <>
            <section className={`${style.sectionAboutUsIntro} routerTransition`}>
                <AboutIntro />
            </section>
            <section className={`${style.sectionWorkWithUs}`}>
                <WorkWithUs />
            </section>
        </>
    )
}

export default AboutUs
