import style from '@/components/common/header/Header.module.scss'
import ROUTES from '../../../router/Router'
import { useEffect, useState } from 'react'
const Header = () => {

    const [Navigation, setNavigation] = useState(ROUTES || [])

    useEffect(() => {
        if (!Navigation || !Navigation.length) {
            setNavigation(ROUTES)
        }
    }, [])

    return <>
        <header className={style.contentCommonHeader}>
            <div className={style.contentLeftSide}>
                <div className={style.logo}>
                    <h1>Logo</h1>
                </div>
            </div>
            <div className={style.contentRightSide}>
                <ul className={style.navigation}>
                    {
                        Navigation && Navigation.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span>
                                        {
                                            item.label
                                        }
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

        </header>
    </>
}

export default Header