import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CountriesProvider } from "./components/context/CountriesContext";

import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <CountriesProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </CountriesProvider>
    </BrowserRouter>
  )
};
export default App;
