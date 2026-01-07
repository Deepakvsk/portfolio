import './App.css'
import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonials'
import Hero2 from './Components/Hero2'
import Test from './Components/Test'
import WorkWithMe from './Components/WorkWithMe'

function App() {

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      {/* <Test /> */}
      {/* <Hero /> */}
      <Hero2 />
      <WorkWithMe />
      <Testimonials />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />


    </div>
  )
}

export default App
