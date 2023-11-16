import { useState } from 'react'
import Search from '@/components/search/Search'
import style from '@/pages/news/News.module.scss'
import { CONTENT_MANAGER } from '@/utils/Data'
import EmptyArticleImage from '@/assets/images/news.jpg'

const News = () => {
    const [SearchValue, setSearchValue] = useState('')
    const [News, setNews] = useState([])

    useState(() => {
        setNews(CONTENT_MANAGER.NEWS)
    }, [])
    return (
        <>
            <section className={style.sectionNewsIntro}>
                <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <Search
                    value={SearchValue}
                    onChange={(value) => setSearchValue(value)}
                />
                <div
                    className={style.newsContent}
                    data-aos="fade-right"
                >
                    <div className={style.mainArticles}>
                        <ul>
                            {News &&
                                News.slice(0, 3).map((article, index) => {
                                    return (
                                        <li
                                            key={index}
                                            data-aos={'fade-bottom'}
                                        >
                                            <div className={style.articleImage}>
                                                <img src={article.Image} />
                                            </div>
                                            <div className={style.articleDetails}>
                                                <div className={style.authorDetails}>
                                                    <span>
                                                        {' '}
                                                        <strong>Author</strong>: {article.Author}
                                                    </span>
                                                    <span>{article.Date}</span>
                                                </div>
                                                <h1>{article.Label}</h1>
                                                <p>{article.Message}</p>
                                                <div className={style.readMore}>
                                                    <span>Read More</span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                    <div
                        className={style.sideArticles}
                        data-aos="fade-left"
                    >
                        <ul>
                            {News &&
                                News.map((article, index) => {
                                    return (
                                        <li
                                            key={index}
                                            data-aos={'flip-up'}
                                        >
                                            <div className={style.imageWrapper}>
                                                <img src={EmptyArticleImage} />
                                            </div>
                                            <div className={style.detailsWrapper}>
                                                <div className={style.authorDetails}>
                                                    <h1>{article.Author}</h1>
                                                </div>
                                                <div className={style.articleContent}>
                                                    <p>{article.Message.slice(0, 120)}...</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News
