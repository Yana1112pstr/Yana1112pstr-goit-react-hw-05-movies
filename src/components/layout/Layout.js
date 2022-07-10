import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import s from "./Layout.module.css";

const Layout = () => {
  return (
      <>
      <header className={s.header}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Movies
        </NavLink>
      </nav>
      <hr/>
    </header>
    <main className={s.main}>
        <Outlet/>
    </main>
      </>
  );
};

export default Layout;
