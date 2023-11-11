import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '@/pages/home/Home';
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
