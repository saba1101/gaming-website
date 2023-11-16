import style from '@/components/common/header/Header.module.scss'
import ROUTES from '@/router/Router'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
const Header = () => {
    const Navigate = useNavigate()
    const Location = useLocation()
    const [Navigation, setNavigation] = useState([])
    const [ActiveRoutePath, setActiveRoutePath] = useState(null)

    const NavigateToUrl = (event, navigationObject) => {
        if (navigationObject.url) {
            Navigate(navigationObject.url)
            setActiveRoutePath(navigationObject.url)
        }
    }

    useEffect(() => {
        const currentRoute = Location.pathname
        if (!Navigation || !Navigation.length) {
            const newRoutes = ROUTES.map((route) => ({ ...route, active: route.url === currentRoute }))
            setNavigation(newRoutes)
            setActiveRoutePath(Location.pathname)
        }
    }, [])

    return (
        <>
            <header
                data-aos="fade-down"
                className={style.contentCommonHeader}
            >
                <div className={style.contentLeftSide}>
                    <div className={style.logo}>
                        <h1>Logo</h1>
                    </div>
                </div>
                <div className={style.contentRightSide}>
                    <ul className={style.navigation}>
                        {Navigation &&
                            Navigation.map((item, index) => {
                                return (
                                    <li
                                        onClick={(e) => NavigateToUrl(e, item)}
                                        key={index}
                                        className={`${item.key === 'NAV_CONTACT' ? style.contactNavItem : ''} ${
                                            ActiveRoutePath === item.url ? style.activeRoute : ''
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
