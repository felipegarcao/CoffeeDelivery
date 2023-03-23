import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { SuccessDelivery } from "./pages/SuccessDelivery";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/success" element={<SuccessDelivery />} />
      </Routes>
    </BrowserRouter>
  );
}
