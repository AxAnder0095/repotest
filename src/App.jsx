import './App.css'
import Home from "./Home/Home.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    // make sure the basename in the Router matches the basename
    // in the vite.config.ts file
    // Can use basename="/portfolio/" or basename={import.meta.env.BASE_URL}

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
