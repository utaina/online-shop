import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slices/cartSlice'
import { Button } from '../Button/Button'
import { ItemQuantityButton } from '../ItemQuantityButton/ItemQuantityButton'
import './CartItem.css'

export const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const handleRemoveItem = (item) => {
        dispatch(removeFromCart(item))
    }
    
    return (
        <div className="cart-item" key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>${item.price}</div>
            <ItemQuantityButton  item={item}/>
            <div>${item.itemQuantity * item.price}</div>
            <Button onClick={() => handleRemoveItem(item)} name='Remove'/>
        </div>
    )
}