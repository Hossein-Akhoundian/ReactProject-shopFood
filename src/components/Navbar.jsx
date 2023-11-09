import { useState, useContext } from "react";

import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { BsCart } from "react-icons/bs";

import { CartContext } from "../context/CartContext";

import CartProduct from "./CartProduct";

// link for button
import { useNavigate } from "react-router-dom";

function Navbar() {

  // use navigate
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Login`; 
    navigate(path);}

  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleShow = () => {
    setShowModal(true);
  };
  const handleclose = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavbarBs className="border-buttom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ({productsCount})<BsCart className="mx-2"></BsCart>سبد خرید
          </Button>

          <Button 
            className="mx-4 text-white" 
            variant="btn btn-outline-secondary"
            onClick={routeChange} // use navigate
            >
              ثبت نام
          </Button>

        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal
        show={showModal}
        onHide={handleclose}
        contentClassName="card-bg"
        dir="rtl"
      >
        <Modal.Header>
          <Modal.Body>
            {productsCount > 0 ? (
              <>
                <h3 className="mb-4">سبد خرید</h3>
                {cart.items.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  ></CartProduct>
                ))}
                <h3>مجموع قیمت: {cart.getTotalAmount()} تومان</h3>
              </>
            ) : (
              <h3>سبد خرید خالی است</h3>
            )}

            <Button className="mt-8 mx-4" variant="btn btn-light">
              ثبت سفارش
            </Button>

            <Button
              onClick={handleclose}
              variant="btn btn-outline-danger active"
              className="mb-4 my-4 text-white"
            >
              بستن
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Navbar;
