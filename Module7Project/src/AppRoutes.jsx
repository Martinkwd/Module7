import Homepage from "./HomePage";
import Loginpage from "./LoginPage";
import BitcoinRates from "./bitcoinRates";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { ProductList } from "./ProductPost";
function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />

      <Route path="login" element={<Loginpage {...props} />}></Route>

      <Route path="bitcoinRates" element={<BitcoinRates {...props} />} />

      <Route path="ProductPost" element={<ProductList {...props} />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
