import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import AddressesPage from "./pages/addressesPage";
import BasketPage from "./pages/basketPage";
import HomePage from "./pages/homePage";
import SecurityPage from "./pages/securityPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/addresses" element={<AddressesPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
