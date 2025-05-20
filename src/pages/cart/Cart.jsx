import React, { useContext } from "react";
import { cartContext } from "../../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import './cart.css'



// * ==================  FUNCTION COMPONENT  =================== 
export default function Cart() {

// * ==================  MY HOOKS  =================== 
  const { cartItems, increesItemQuantity, decreesItemQuantity, deletePrd } = useContext(cartContext);
  //   console.log(cartItems);
  const total = cartItems.reduce((acc, item)=> acc + item.price * item.itemQuantity , 0)
  
// * ==================  JSX COMPONENT ELEMENTS  =================== 
  return (
    <>
      <div className="checkout">
        <div className="ordersummry">
          <h1>Order Summry</h1>


    {/* // * ==================  ITEMS  ===================  */}
          <div className="items">
            {cartItems.length == 0 ? (
              <h1>Your Cart is empty.</h1>
            ) : (
              cartItems.map((item, index) => (


                <div className="item-cart" key={index}>
                    <div className="img-name">
                      <div className="img-item">
                        <img src={item.images[0]} alt=""  />
                      </div>

                        <div className="contentt">
                            <h4>{item.title}</h4>
                            <p className="price">$ {item.price}</p>

                            <div className="quantity-control">
                                <button onClick={()=>decreesItemQuantity(item.id)}>-</button>
                                <span className="quantity">{item.itemQuantity}</span>
                                <button onClick={()=>increesItemQuantity(item.id)}>+</button>
                            </div>
                        </div>

                    </div>
                        <button onClick={()=>deletePrd(item.id)} className="delete-item"><FaTrashAlt/></button>
                </div>
              ))
            )}
          </div>
 
    {/* // * ==================  BOTTOM SUMMRY  ===================  */}
            <div className="bottomsummry">
              <div className="shop-table">
                <p>Total : </p>
                <span className="total-checkout">${total.toFixed(2)}</span>
              </div>

              <div className="btn-div">
                <button type="submit">Place Order</button>
              </div>
            </div>

        </div>
      </div>
    </>
  );
}
