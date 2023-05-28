import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Basket, Error, Login, Account, Search, ViewProductSingle, ViewCategoryProductList } from "./views/index";
import { Navbar, Footer } from "./components/common/index";
import { AuthContext } from './context/authContext';
import ProtectedRoute from './routers/ProtectedRoute';
import PublicRoute from './routers/PublicRoute';
import { useContext, useState } from 'react';
import CustomCursor from './cursor/customcursor.jsx';
import AboutUsPage from "../src/aboutUs/AboutUsPage";
import backgroundSVG from './assets/images/bg_hero.svg'; // Replace 'Background.svg' with the actual file path of your SVG file
import './App.scss';

function App() {
  const { authData } = useContext(AuthContext);
  const [hideNavbar, setHideNavbar] = useState(false);

  const toggleNavbar = () => {
    setHideNavbar(!hideNavbar);
  };

  return (
    <div className="app">
      <div className="background-svg" style={{ backgroundImage: `url(${backgroundSVG})` }}></div>
      <Router>
        <CustomCursor />
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/about" element={<AboutUsPage toggleNavbar={toggleNavbar} />} />

          <Route element={<ProtectedRoute authData={authData} />}>
            <Route path="account" element={<Account />} />
            <Route path="basket" element={<Basket />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="error" element={<Error />} />
            <Route path="login" element={<Login />} />
            <Route path="products/:id" element={<ViewProductSingle />} />
            <Route path="category/:categoryKey" element={<ViewCategoryProductList />} />
            <Route path="search/:searchKey" element={<Search />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        {!hideNavbar && <Footer />}
      </Router>
    </div>
  )
}

export default App;
