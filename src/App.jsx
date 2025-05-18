//TODO https://golden-line-seven.vercel.app/
//TODO VERCEL LINK

import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";
// import ScrollTop from "./components/ScrollTop";
import { AnimatePresence } from "framer-motion";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";

function App() {
  return (
    <>
      <header className=" fixed top-0 left-0 right-0 z-10 bg-[var(--white_color)]">
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />

      {/* <ScrollTop /> */}

      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/categoryProducts/:cat" element={<CategoryProducts />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
