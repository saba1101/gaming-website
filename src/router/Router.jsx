import Home from "@/pages//home/Home"
import AboutUs from '@/pages/about/AboutUs.jsx'
import ContactUs from '@/pages/contact/ContactUs.jsx'
import News from '@/pages/news/News.jsx'
import Portfolio from '@/pages/portfolio/Portfolio.jsx'

const ROUTES = [
    {
        label: 'Home',
        url: '/',
        component: <Home />,
        key: "NAV_HOME"
    }, {
        label: 'About Us',
        url: '/aboutus',
        component: <AboutUs />,
        key: "NAV_ABOUT"
    }, {
        label: 'News',
        url: '/news',
        component: <News />,
        key: "NAV_NEWS"
    }, {
        label: 'Portfolio',
        url: '/portfolio',
        component: <Portfolio />,
        key: "NAV_PORTFOLIO"
    }, {
        label: 'Contact Us',
        url: '/contactus',
        component: <ContactUs />,
        key: "NAV_CONTACT"
    }
]

export default ROUTES