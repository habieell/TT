import { useState, useEffect, useContext } from "react";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { AiOutlineBars } from "react-icons/ai";
import { CategoryContext } from "../../context/categoryContext";
import { BasketContext } from "../../context/basketContext";
import { AuthContext } from "../../context/authContext";
import logo from "../../assets/images/logott.jpeg";

const Navbar = () => {
  const { categories } = useContext(CategoryContext);
  const [showCategory, setShowCategory] = useState(false);
  const {
    getBasketTotal,
    itemsCount,
    totalAmount,
    dispatch: basketDispatch,
    basket,
  } = useContext(BasketContext);
  const { authData, logout, dispatch: authDispatch } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = () => {
    setShowCategory((prevData) => !prevData);
  };

  const handleSearchTerm = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getBasketTotal(basketDispatch);
    // eslint-disable-next-line
  }, [basket]);

  const notify = () => {
    toast("You are logged out!");
  };

  return (
    <nav className="navbar navbar-fixed">
      <div className="navbar-main bg-black">
        <div className="container">
          <div className="navbar-main-top flex align-center justify-between">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" />
            </Link>

            <form className="navbar-search-form">
              <div className="input-group bg-white">
                <input
                  type="text"
                  placeholder="Search for Product, Brand or Category"
                  className="form-control"
                  onChange={(event) => handleSearchTerm(event)}
                />
                <Link
                  to={`search/${searchTerm}`}
                  className="btn btn-primary flex align-center text-white px-3"
                >
                  <BsSearch size={15} />
                  <span className="fs-15 mx-2">Search</span>
                </Link>
              </div>
            </form>

            <div
              id="navbar-kanan"
              className="navbar-basket text-white flex align-center"
            >
              <Link to="/basket" className="basket-btn">
                <HiShoppingBag size={29} />
                <span className="basket-count flex align-center justify-center">
                  {authData.isLoggedIn ? itemsCount : "0"}
                </span>
              </Link>
              <div className="text-end basket-count">
                <p className="text-uppercase fs-14 text-white">my cart</p>
                <Link to="/basket" className="fw-7">
                  $ &nbsp;
                  <span className="basket-amount">
                    {authData.isLoggedIn ? totalAmount : "0"}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-main-bottom flex align-center justify-between">
            <div className="navbar-cats-wrapper">
              <div
                className="navbar-cats-btn flex align-center text-white py-2"
                onClick={toggleCategory}
              >
                <AiOutlineBars />
                <span className="text-uppercase mx-3 fs-13">categories</span>
                <BsCaretDownFill />
              </div>

              <ul
                className={`category-list ${
                  showCategory ? "show-category-list" : ""
                }`}
                onClick={toggleCategory}
              >
                {categories.map((category, idx) => {
                  return (
                    <li className="category-item" key={idx}>
                      <Link
                        to={`category/${category}`}
                        className="category-item-link text-uppercase text-dark fs-12"
                      >
                        {category?.replace("-", " ")}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="navbar-top flex align-center">
              <div className="container w-100 flex align-center justify-end">
                <Link
                  to="/about"
                  className="flex align-center justify-end text-white"
                >
                  <span className="mx-2 fs-13 text-uppercase ls-1">
                    About Us
                  </span>
                </Link>

                {authData.isLoggedIn ? (
                  <Link
                    to="/account"
                    className="flex mx-4 align-center justify-end text-white mx-4"
                  >
                    <FaUser size={14} />
                    <span className="mx-2 fs-13 text-uppercase ls-1">
                      {authData.info.firstName}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="login"
                    className="mx-4 login-btn flex align-center justify-end text-white"
                  >
                    <FaUser size={14} />
                    <span className="mx-2 fs-13 text-uppercase ls-1">
                      Login
                    </span>
                  </Link>
                )}

                {authData.isLoggedIn && (
                  <button
                    type="button"
                    onClick={() => {
                      logout(authDispatch);
                      notify();
                    }}
                    className="flex align-center justify-end text-white"
                  >
                    <FiLogOut size={14} />
                    <span className="mx-2 fs-13 text-uppercase ls-1">
                      logout
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
