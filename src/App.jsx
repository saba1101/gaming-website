import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '@/components/common/header/Header.jsx'
import Footer from '@/components/common/footer/footer'
import ROUTES from '@/router/Router.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

const App = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Router>
                <ScrollToTop />
                <Header />
                <main className={'mainContent_routerView'}>
                    <Routes>
                        {ROUTES.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.url}
                                    element={route.component}
                                ></Route>
                            )
                        })}
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    )
}

export default App
