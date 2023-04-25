
import CartWidget from "../CartWidget/CartWidget";

import logo from "./mahalo.jpg";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
  
    <div>
    <div className={styles.containerNavbar}>
      <Link to="/">
      <img src= {logo} alt="" style={{width: "80px"}}/>
      </Link>

      <ul style={{ display: "flex", gap: "30px" }}>
        
        {
          <Button
            variant="outlined"
            onClick={() => navigate("/category/Cosmetica")}
          >
            Cosmetica
          </Button>
        }

        {
          <Button
            variant="outlined"
            onClick={() => navigate("/category/Body Splash")}
          >
            Body Splash
          </Button>
        }
        
        {
          <Button
            variant="outlined"
            onClick={() => navigate("/category/Aromatizantes")}
          >
            Aromatizantes
          </Button>
        }
      </ul>
      <CartWidget />
    </div>

    <Outlet />
  </div>
  );
};
