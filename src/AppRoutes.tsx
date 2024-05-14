import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CountriesProvider } from "./context/CountriesContext";

import Header from "./components/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <CountriesProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:code" element={<Country />}/>
        </Routes>
      </CountriesProvider>
    </BrowserRouter>
  )
};
export default AppRoutes;
