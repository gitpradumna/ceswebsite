import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Pages/Home/Home'
import Gallery from './Components/Pages/Gallery/Gallery'
import Blog from './Components/Pages/Blog/Blog'
import BlogPost from './Components/Pages/BlogPost/BlogPost'
import Team from './Components/Pages/Team/Team'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App


