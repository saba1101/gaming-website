import style from '@/pages/portfolio/Portfolio.module.scss'
import { useEffect, useState } from 'react'
import { CONTENT_MANAGER } from '@/utils/Data'

const Customers = () => {
    const [Reviews, setReviews] = useState([])

    useEffect(() => {
        setReviews(CONTENT_MANAGER.REVIEWS)
    }, [])
    return (
        <>
            <div className={style.templateCustomers}>
                <h1>Trusted by Thousands of Happy Customer</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
                <ul>
                    {Reviews &&
                        Reviews.map((reviewer, index) => {
                            return (
                                <li
                                    key={index}
                                    data-aos="flip-up"
                                    data-aos-delay={`${index}00`}
                                >
                                    <div className={style.reviewTop}>
                                        <div className={style.reviewerdDetails}>
                                            <div className={style.avatar}>
                                                <span>{reviewer.Authors.slice(0, 1)}</span>
                                            </div>
                                            <span>{reviewer.Authors}</span>
                                        </div>
                                        <div className={style.rated}>
                                            <span>{reviewer.Stars} </span>
                                            <svg
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.1891 6.16515L10.2219 5.58859L8.44844 1.99328C8.4 1.89484 8.32031 1.81515 8.22187 1.76672C7.975 1.64484 7.675 1.7464 7.55156 1.99328L5.77812 5.58859L1.81094 6.16515C1.70156 6.18078 1.60156 6.23234 1.525 6.31047C1.43244 6.4056 1.38143 6.53359 1.38319 6.66631C1.38495 6.79904 1.43933 6.92563 1.53437 7.01828L4.40469 9.81672L3.72656 13.7683C3.71066 13.8602 3.72083 13.9547 3.75592 14.0412C3.79102 14.1276 3.84963 14.2025 3.92511 14.2573C4.00059 14.3121 4.08992 14.3447 4.18297 14.3513C4.27602 14.358 4.36907 14.3384 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3464 11.7578 14.3636 11.8656 14.3448C12.1375 14.298 12.3203 14.0402 12.2734 13.7683L11.5953 9.81672L14.4656 7.01828C14.5437 6.94172 14.5953 6.84172 14.6109 6.73234C14.6531 6.4589 14.4625 6.20578 14.1891 6.16515Z"
                                                    fill="#FEA250"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={style.reviewBottom}>
                                        <p>{reviewer.Comment}</p>
                                    </div>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </>
    )
}

export default Customers
