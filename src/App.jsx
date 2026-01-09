import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Verses from './pages/Verses'
import Stories from './pages/Stories'
import Maryam from './pages/Maryam'
import Hadith from './pages/Hadith'
import SecondComing from './pages/SecondComing'
import Comparative from './pages/Comparative'
import Search from './pages/Search'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="verses" element={<Verses />} />
        <Route path="stories" element={<Stories />} />
        <Route path="maryam" element={<Maryam />} />
        <Route path="hadith" element={<Hadith />} />
        <Route path="second-coming" element={<SecondComing />} />
        <Route path="comparative" element={<Comparative />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
