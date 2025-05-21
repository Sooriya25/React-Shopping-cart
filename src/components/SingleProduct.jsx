
import{useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProductById } from '../features/ShopCart/productSlice'
import { addToCart } from '../features/ShopCart/cartSlice';

function SingleProduct() {
    
    const { id } = useParams()
    const dispatch = useDispatch();

    console.log(id)
    const product = useSelector((state) => 
        selectProductById(state, Number(id)))
    if(!product) {
        return (
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }

    return (
        <>
        <div className="single-product-page">
            <div className="single-product" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p className='description'>{product.description}</p>
                <p className='price'>Price: ${product.price}</p>
                <button 
                    className='add-to-cart'
                    onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
            </div>
        </div>
        </>
    )
}


export default SingleProduct