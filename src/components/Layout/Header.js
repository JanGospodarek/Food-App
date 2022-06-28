import React from "react";
import meals from "../../images/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  const { header, main_image } = styles;
  return (
    <React.Fragment>
      <header className={header}>
        <h1>Your food app</h1>
        <HeaderCartButton onClick={props.showCartHandler} />
      </header>
      <div className={main_image}>
        <img src={meals} alt="Yummy!" />
      </div>
    </React.Fragment>
  );
}
export default Header;
