import style from '@/pages/portfolio/Portfolio.module.scss'
import Vmp4 from '@/assets/videos/launch.mp4'
const Launch = () => {
    return (
        <>
            <div
                className={style.templateLauch}
                data-aos="zoom-in"
            >
                <video
                    controls
                    autoPlay
                    width={720}
                >
                    <source src={Vmp4} />
                </video>
                <div className={style.launchDetails}>
                    <h1>Lorem Ipsum is simply dummy text.</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.Lorem Ipsum is simply dummy .
                    </p>
                    <ul>
                        {[...Array(6)].map((i, index) => {
                            return (
                                <li key={index}>
                                    <svg
                                        width="21"
                                        height="20"
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.5986 0C5.08463 0 0.598633 4.486 0.598633 10C0.598633 15.514 5.08463 20 10.5986 20C16.1126 20 20.5986 15.514 20.5986 10C20.5986 4.486 16.1126 0 10.5986 0ZM8.59963 14.413L5.59408 11.4139C5.20333 11.024 5.20254 10.3912 5.59232 10.0003C5.98234 9.60918 6.61564 9.60846 7.00656 9.9987L8.59763 11.587L13.1846 7C13.5751 6.60953 14.2082 6.60953 14.5986 7C14.9891 7.39047 14.9891 8.02353 14.5986 8.414L8.59963 14.413Z"
                                            fill="#2FAB73"
                                        />
                                    </svg>
                                    <span>Lorem Ipsum is simply</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Launch
