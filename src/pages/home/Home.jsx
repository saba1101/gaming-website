import style from '@/pages/home/Home.module.scss'
import HomeIntro from '@/pages/home/templates/HomeIntro.jsx'

const Home = () => {
    return <>
        <section className={`${style.sectionHomeIntro} routerTransition`}>
            <HomeIntro />
        </section>
    </>
}

export default Home