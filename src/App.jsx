import Plans from "./plan/Plans"
import Courses from "./course/Courses"
import Directions from "./direction/Directions"
import './app.css'
import Header from "./header/Header"



function App() {
  return(
    <div className="app">
      <Header/>
      <Courses/>
      <Directions/>
      <Plans/>
    </div>
  )
}

export default App
