import style from '@/pages/portfolio/Portfolio.module.scss'
import { useEffect, useState } from 'react'
import { CONTENT_MANAGER } from '../../../utils/Data'

const OverView = () => {
    const [Details, setDetails] = useState([])

    useEffect(() => {
        setDetails(CONTENT_MANAGER.OVERVIEW)
    }, [])
    return (
        <>
            <div
                className={style.templateOverView}
                data-aos="fade-bottom"
            >
                <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <ul className={style.overViewDetails}>
                    {Details &&
                        Details.map((detail, index) => {
                            return (
                                <li key={index}>
                                    <div className={style.iconWrapper}>{<detail.Icon />}</div>
                                    <div className={style.labelWrapper}>
                                        <h2>{detail.Value} +</h2>
                                        <span>{detail.Label}</span>
                                    </div>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </>
    )
}

export default OverView
