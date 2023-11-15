import style from '@/pages/about/AboutUs.module.scss'
import AboutIntro from './templates/AboutIntro'
import WorkWithUs from './templates/WorkWithUs'
import ContentDisplay from './templates/ContentDisplay'
import OurTeam from './templates/OurTeam'
const AboutUs = () => {
    return (
        <>
            <section className={`${style.sectionAboutUsIntro} routerTransition`}>
                <AboutIntro />
            </section>
            <section className={`${style.sectionWorkWithUs}`}>
                <WorkWithUs />
            </section>
            <section className={style.sectionContentDisplay}>
                <ContentDisplay />
            </section>
            <section className={style.sectionOurTeam}>
                <OurTeam />
            </section>
        </>
    )
}

export default AboutUs
