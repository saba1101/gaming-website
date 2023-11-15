import style from '@/pages/about/AboutUs.module.scss'

const WorkWithUs = () => {
    return (
        <>
            <div className={style.templateWorkWithUs}>
                <h1>Why work with us</h1>
                <ul>
                    {[...Array(4)].map((obj, index) => {
                        return (
                            <li
                                key={index}
                                className={style.cardContent}
                            >
                                <div className={style.cardLabel}>
                                    <h3>Lorem ipsum</h3>
                                </div>
                                <div className={style.cardDetails}>
                                    <h2>Lorem Ipsum</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s,
                                    </p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default WorkWithUs
