import { useDispatch } from "react-redux";
import { addToCart } from '../features/ShopCart/cartSlice';
import { Link } from "react-router-dom";


function Product({product}) {
    const dispatch = useDispatch();

   
         
  return (
     <div className="product-card" key={product.id}>
        <Link to={`product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title.length>20? `${product.title.slice(0,20)}...`:product.title}</h2>
        </Link>
        <p>Price: ${product.price}</p>
        <button 
            className="add-to-cart"
            onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default Product