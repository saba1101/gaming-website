import style from '@/pages/about/AboutUs.module.scss'
import AboutIntro from '@/page/about/templates/AboutIntro'
import WorkWithUs from '@/page/about/templates/WorkWithUs'
import ContentDisplay from '@/page/about/templates/ContentDisplay'
import OurTeam from '@/page/about/templates/OurTeam'
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
