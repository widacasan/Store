import React from "react";
import "./App.css";
import iconMenu from '../assets/icons/icon_menu.svg';
import logoYardSale from '../assets/logos/logo_yard_sale.svg';
import iconShoppingCart from '../assets/icons/icon_shopping_cart.svg'

function TopBar() {
  return (
    <div>
      <nav>
        <img src={iconMenu} alt="menu"  />
        <div className="navbar-left">
          <img src={logoYardSale} alt="logo"  />

          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email">platzi@example.com</li>
            <li className="navbar-shopping-cart">
              <img src={iconShoppingCart} alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TopBar;
