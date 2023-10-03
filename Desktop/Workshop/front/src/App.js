import './App.css'

import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Router from "./components/Router"

function App() {
    return (
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
    )
}

export default App;