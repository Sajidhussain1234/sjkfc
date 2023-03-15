import { useContext } from "react";
import AddToCartContext from "../context/AddToCartContext";

const OrderDetail = () => {  
const ctx = useContext(AddToCartContext); 
const {quantity, bill} = ctx; 


  return (
    <div className="text-bg-info p-3 mt-3 sticky-top">
        <h3>You purchased: {quantity} items</h3>
        <h3>Your total bill is Rs. {bill} </h3>

    </div>
  )
}

export default OrderDetail; 