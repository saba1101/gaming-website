import style from '@/components/common/footer/Footer.module.scss'
import { CONTENT_MANAGER } from '../../../utils/Data'
import { useState } from 'react'
const Footer = () => {
    const [Socials, setSocials] = useState([])

    useState(() => {
        setSocials(CONTENT_MANAGER.SOCIALS)
    }, [])
    return (
        <>
            <footer className={style.contentCommonFooter} data-aos="fade-up">
                <div className={style.footerTop}>
                    <ul className={style.footerMainDetails}>
                        <li>
                            <span>LOGO</span>
                        </li>
                        <li>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                        </li>
                        <li>
                            <span>@Logo</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Zeux</span>
                        </li>
                        <li>
                            <span>Portfolio</span>
                        </li>
                        <li>
                            <span>Careers</span>
                        </li>
                        <li>
                            <span>Contact us</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Contact us</span>
                        </li>
                        <li>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                        </li>
                        <li>
                            <span>+908 89097 890</span>
                        </li>
                    </ul>
                    <ul className={style.footerSocials}>
                        {
                            Socials.map((social, index) => {
                                return <li key={index}>
                                    {<social.Icon />}
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className={style.footerBottom}>
                    <div className={style.copyRight}>
                        <h2>Copyright ® 2023 Blitz All rights Reserved</h2>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer