import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import BeersPage from "./pages/BeersPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/beers" element={<BeersPage/>} />
        <Route path="/random-beer" element={""} />
        <Route path="/new-beer" element={""} />
      </Routes>
    </div>
  )
}

export default App