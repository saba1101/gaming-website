import style from '@/pages/home/Home.module.scss'
import { CONTENT_MANAGER } from '@/utils/Data'
import { useEffect, useState } from 'react'
const Services = () => {
    const [Services, setServices] = useState([])

    useEffect(() => {
        setServices(CONTENT_MANAGER.SERVICES)
    }, [])
    return (
        <>
            <div className={style.templateServices}>
                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                </p>
                <div className={style.servicesList}>
                    <ul>
                        {Services &&
                            Services.map((service, index) => {
                                return (
                                    <li
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={`${index}00`}
                                    >
                                        <div className={style.iconWrapper}>{<service.Image />}</div>
                                        <span>{service.Label}</span>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Services
