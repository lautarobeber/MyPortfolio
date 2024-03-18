
import './App.css'
import { Banner } from './components/Banner'
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/Skills'
import { Projects } from './components/Project'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {
  

  return (
    <>
     <NavBar/>
   <Banner/>
   <Skills />
   <Projects />
   {/* <Contact /> */}
{/*    <Footer /> */}
    </>
  )
}

export default App
