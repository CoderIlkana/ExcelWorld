import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from './components/Home/Head';
import Home from "./pages/Home";
import Navbar from './components/Home/Navbar';
import Footer from "./components/Home/Footer";


const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Navbar/>
        
      <Routes>
      <Route path="/" element={<Home />} ></Route>
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>

  )
}

export default AppRouter