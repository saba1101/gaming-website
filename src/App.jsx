import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/common/header/Header.jsx'
import ROUTES from '@/router/Router.jsx'
const App = () => {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          {
            ROUTES.map((route, index) => {
              return <Route key={index} path={route.url} element={route.component}></Route>
            })
          }
        </Routes>
      </Router>
    </>

  )
}

export default App
