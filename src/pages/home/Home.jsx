import style from '@/pages/home/Home.module.scss'
import HomeIntro from '@/pages/home/templates/HomeIntro.jsx'
import TrendingGames from './templates/TrendingGames'
import SpotLight from './templates/Spotlight'
import Services from './templates/Services'
import GamingShowcase from './templates/GamingShowcase'
const Home = () => {
    return <>
        <section className={`${style.sectionHomeIntro} routerTransition`}>
            <HomeIntro />
        </section>
        <section className={style.sectionTrendingGames}>
            <TrendingGames />
        </section>
        <section className={style.sectionSpotlight}>
            <SpotLight />
        </section>
        <section className={style.sectionServices}>
            <Services />
        </section>
        <section className={style.sectionGamingahowcase}>
            <GamingShowcase />
        </section>
    </>
}

export default Home