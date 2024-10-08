import './App.css'
import FutureCrafted from './components/FutureCrafted'
import Header from './components/Header'
import Hero  from './components/Hero'
import { BrowserRouter as Router } from 'react-router-dom'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyHireMe from './components/WhyHireMe'
import GetTouch from './components/GetTouch'
import Contact from './components/Contact'

function App() {

  return (
    <Router>

    <div className='box-border bg-black m-0 p-0 min-h-screen'>

      <Header/>
      <Hero />
      <FutureCrafted />
      <Skills />
      <Services />
      <Projects />
      <WhyHireMe />
      <GetTouch />
      <Contact />
    </div>
    

    </Router>
    
  
    
  )
}

export default App
