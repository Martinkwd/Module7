import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BitcoinRates from "./bitcoinRates";
import MoodChanger from "./MoodChanger";
import { EmojiProvider } from "./EmojiProvider";
import AppRoutes from "./AppRoutes";
import Homepage from "./HomePage";
import NavBar from "./NavBar";
import ResponsiveAppBar from "./appBar";
import { ProductList } from "./ProductPost";

function App() {
  return (
    <>
      <EmojiProvider>
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* <ProductList></ProductList> */}
        {/* <NavBar></NavBar> */}
        <AppRoutes></AppRoutes>
        {/* <BitcoinRates></BitcoinRates>
        <MoodChanger></MoodChanger> */}
      </EmojiProvider>
    </>
  );
}

export default App;
