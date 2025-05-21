import  { useEffect} from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from '../features/ShopCart/productSlice';
import Product from './Product';
import Loading from './ClipLoader';

function ProductList() {

    const  {items:products, status} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
       if(status === 'idle'){
        dispatch(fetchProducts())
       }
    },[status]);

    let content;
    if(status === 'loading'){
        content = <Loading/>
    } else if (status ===  'succeeded') {
        content = products.map(product=> <Product key={product.id} product={product} />)
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

  

  return (
        <>
        <div className="product-list">
            { content }
        </div>
        </> 
  )
}

export default ProductList