
//TODO https://golden-line-seven.vercel.app/   
//TODO VERCEL LINK


import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productDetails/:id" element={<ProductDetails/>}/>
      </Routes>

      {/* <Home/> */}


    </>
  );
}

export default App;
