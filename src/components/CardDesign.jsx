import { useContext, useState } from "react";
import AddToCartContext from "../context/AddToCartContext";


const CardDesign = (props) => {

    const [quantity, setQuantity] = useState(1)

    const { img, title, description, price } = props;
    const ctx = useContext(AddToCartContext); 
    const {BillCalculation} = ctx;      

    const handleOnClick =(quantity, price)=>{
       BillCalculation(quantity, price);     
    //    console.log()    
    }

    return (
         <div className="card" >
            <img src={img} className="card-img-top" alt="missing" height="240vh" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-around mb-3">
                <button className="btn btn-primary"  onClick={_=>quantity>1 && setQuantity(quantity-1)}> - </button> 
                     <strong> {quantity} </strong>
                <button className="btn btn-primary" onClick={_=>!(quantity>9) && setQuantity(quantity+1)}> + </button>
                </div>
                <hr />
                
                <div className='d-flex justify-content-between'>
                    <h2 > Rs. {price}</h2>                     
                    <button className="btn btn-success" onClick={()=>{handleOnClick(quantity, price)}}>Add to cart</button>
                </div>
                

            </div>
        </div>
    )
}

export default CardDesign