import { HeaderSection } from './assets/HeaderSection/HeaderSection'
import './App.css'
import { AboutMe } from './assets/AboutMe/AboutMe'
import { MySkill } from './assets/MySkills/MySkills.'
import { ContactMe } from './assets/ContactMe/ContacMe'
import { MyProject } from './assets/MyProjects/MyProjects'

function App() {
  

  return (<>
  <HeaderSection/>
  <main>
    <AboutMe/>
    <MySkill/>
    <MyProject/>
    <ContactMe/>
  </main>
  </>
    
  )
}

export default App
