import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

export default function App() {
  const data = useSelector((mydata) => mydata.counterStore.count);
  const dispatch = useDispatch();
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}
