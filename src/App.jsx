import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import userContext from "./utils/userContext";

function App() {
const [cartInfo, setCartInfo] = useState("");
const [restaurantInfo,setRestaurantInfo] = useState("");

  return (
    <>
    <userContext.Provider value={{cartInfo,setCartInfo,restaurantInfo,setRestaurantInfo}}>
      <Main />
      </userContext.Provider>
    </>
  );
}

export default App;
