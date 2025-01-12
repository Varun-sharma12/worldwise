//This File contains the code of the app screen after the login of user.
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
function App() {
  const BASE_URL = 'http://localhost:9000';
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function(){
async function fetchCities(){
  try{
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/cities`);
    const data = await res.json();
    setCities(data);
  }
  catch{
    alert('there is an error loading data');
  }
  finally{
    setIsLoading(false);
  }
}
fetchCities();
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList cities={cities} isLoading={isLoading} /> } />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
