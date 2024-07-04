import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./Body/CartWraper/CartContainer";
import CardContainer from "./Body/mainCardsWraper/CardContainer";
import About from "./Body/AboutPage/About";
import MenuContainer from "./Body/MenuPage/MenuContainer";
import userContext from "../utils/userContext";
import { useContext } from "react";

const Main = () => {
  const {cartInfo} = useContext(userContext);
  console.log(cartInfo);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route errorElement={<h2>Error 404</h2>}></Route>
          <Route path="/" element={<CardContainer />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<CartContainer heading={"My Cart"} isCloseBtnStatus={true} itemCard={cartInfo} />}></Route>
          <Route path="/menu" element={<MenuContainer heading={"Menu"} isCloseBtnStatus={false} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Main;
