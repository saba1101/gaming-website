import style from '@/pages/home/Home.module.scss'
import HomeIntro from '@/pages/home/templates/HomeIntro.jsx'
import TrendingGames from './templates/TrendingGames'
import SpotLight from './templates/Spotlight'
import Services from './templates/Services'

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
    </>
}

export default Home