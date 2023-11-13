import { useEffect, useState } from "react"
import { CONTENT_MANAGER } from "../../../utils/Data"
import IconFire from '../../../assets/svgComponents/IconFire'
import style from '@/pages/home/Home.module.scss'

const TrendingGames = () => {
    const [TrendingGames, setTrendingGames] = useState([])

    useEffect(() => {
        setTrendingGames(CONTENT_MANAGER.TRENDING_GAMES)
    }, [])

    return (
        <>
            <div className={style.templateTrendingGames}>
                <div className={style.trendingGamesTop}>
                    <h1>Currently Trending Games</h1>
                    <div className={style.seeAll}>
                        <span>
                            See All
                        </span>
                    </div>
                </div>
                <div className={style.trendingGamesContent}>
                    <ul>
                        {
                            TrendingGames && TrendingGames.map((game, index) => {
                                return (
                                    <li key={index} data-aos="fade-up" data-aos-delay={`${index}00`}>
                                        <div className={style.thumb}>
                                            <img src={game.Image} alt="" />
                                            <div className={style.gameDetails}>
                                                <span>Publisher : <span>{game.Publisher}</span></span>
                                                <span>Year : <span>{game.Year}</span></span>
                                                <span>Name : <span>{game.Label}</span></span>
                                            </div>
                                        </div>
                                        <div className={style.followers}>
                                            <IconFire />
                                            <h2>{game.Followers}K Followers </h2>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TrendingGames