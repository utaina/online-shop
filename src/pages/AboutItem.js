import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import {Button} from '../components/Button/Button'
import { ItemQuantityButton } from "../components/ItemQuantityButton/ItemQuantityButton";
import { addToCart, decreaseQuantity } from "../store/slices/cartSlice";


export const AboutItem = () => {
    const {id} = useParams();
    const { items } = useSelector((state) => state.products)
    const item = items[id-1]
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const cart = useSelector(state => state.cart)
    const itemInCart = cart.cartItems?.find(el => el.id === item?.id);
    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }  
    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item))
    }  
    

    return (
        <div className='about-container'>
        <img src={item.image}/>
        <div className='about-main-block'>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {itemInCart ? <ItemQuantityButton decQuantity={() => handleDecreaseQuantity(item)} incQuantity={() => handleAddToCart(item)} item={itemInCart}/> : <Button onClick={() => handleAddToCart(item)} name='Add to cart'/>}
        <Button onClick={goBack} name='Go Back'/>
        </div>
        </div>
    )
}