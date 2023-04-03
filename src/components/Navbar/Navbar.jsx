
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"
import logo from "./mahalo.jpg"


export const Navbar = ( {color} ) => {

  

  return (
    <div className={styles.containerNavbar}>
      <img src= {logo} alt="" />
      <ul style={{display: "flex", gap: "30px"}}>
        <li>Cuidado Corporal</li>
        <li>Perfumes y Aromatizantes</li>
        <li>Terapeuticos</li>
        <li>Bombas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
