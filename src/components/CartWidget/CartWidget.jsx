import { BsFillCartCheckFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.module.css";

const CartWidget = () => {

  const { getTotalQuantity } = useContext(CartContext)

  let total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "3rem",
            color: "white",
          }}
        />
        <div className="bubble-counter">
            <span>{total}</span>
        </div>;
      </div>
    </Link>
  );
};

export default CartWidget;
