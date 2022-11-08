import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import css from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <Link className={css.logoLink} to="main">
          <span className={css.logoText}>L</span>
          <span className={css.logoText}>O</span>
          <span className={css.logoText}>G</span>
          <span className={css.logoText}>O</span>
        </Link>
        <div className={css.menuBox}>
          <button className={css.button} type="button">
            MENU
          </button>
          <ul className={css.navList}>
            <li>
              <NavLink
                className={css.navLink}
                to="main"
                rel="noopener noreferrer"
              >
                Головна
              </NavLink>
              <NavLink
                className={css.navLink}
                to="products"
                rel="noopener noreferrer"
              >
                Товари
              </NavLink>
              <NavLink
                className={css.navLink}
                to="orders"
                rel="noopener noreferrer"
              >
                Замовлення
              </NavLink>
              <NavLink
                className={css.navLink}
                to="returns"
                rel="noopener noreferrer"
              >
                Повернення
              </NavLink>
              <NavLink
                className={css.navLink}
                to="logout"
                rel="noopener noreferrer"
              >
                Вихід
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      {children}
    </>
  );
};

Layout.propTypes = {};

export default Layout;
