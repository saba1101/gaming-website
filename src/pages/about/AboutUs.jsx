import style from '@/pages/about/AboutUs.module.scss'
import AboutIntro from '@/pages/about/templates/AboutIntro'
import WorkWithUs from '@/pages/about/templates/WorkWithUs'
import ContentDisplay from '@/pages/about/templates/ContentDisplay'
import OurTeam from '@/pages/about/templates/OurTeam'
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
