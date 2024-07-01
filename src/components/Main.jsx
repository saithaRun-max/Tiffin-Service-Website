import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./Body/CartWraper/CartContainer";
import CardContainer from "./Body/mainCardsWraper/CardContainer";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route errorElement={<h2>Error 404</h2>}></Route>
          <Route path="/" element={<CardContainer />}></Route>
          <Route path="/cart" element={<CartContainer />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Main;
