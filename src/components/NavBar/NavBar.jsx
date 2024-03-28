import React from 'react';
import appRoutes from '../../constants/routes';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.jpg";
import styles from "./NavBar.module.css";

const values = Object.entries(appRoutes);

const NavBar = () => {
  const navigate = useNavigate();
  const NavBarLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
    };
  };
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.fish_logo}>
          <img src={Logo} alt="logo" />
        </div>
        <span>FISHING</span>
      </div>
      <div className={styles.navbar}>
        {values.map((route) => (
          <span
            key={route[1]}
            onClick={() => {
              navigate(route[1]);
            }}
          >
            <NavLink className={styles.a} style={NavBarLinkStyle} to={route[1]}>
              <span>{route[0]}</span>
            </NavLink>
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
