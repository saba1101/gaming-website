import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/common/header/Header.jsx'
import ROUTES from '@/router/Router.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Router>
        <Header />
        <main className={'mainContent_routerView'}>
          <Routes>
            {
              ROUTES.map((route, index) => {
                return <Route key={index} path={route.url} element={route.component}></Route>
              })
            }
          </Routes>
        </main>
      </Router>
    </>

  )
}

export default App
