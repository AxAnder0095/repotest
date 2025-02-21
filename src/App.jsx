import './App.css'
import Home from "./Home.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {


  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
              <Route path="/" element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
