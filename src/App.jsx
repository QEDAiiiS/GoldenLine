
//TODO https://golden-line-seven.vercel.app/   
//TODO VERCEL LINK


import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Home/>
    </>
  );
}

export default App;
