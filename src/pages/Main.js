import { useDispatch, useSelector } from "react-redux"
import { Card } from "../components/Card/Card"
import { addToCart } from "../store/slices/cartSlice"


export const Main = () => {
    const dispatch = useDispatch()
    const { items, loading } = useSelector((state) => state.products)
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }  

    if (loading) return <p>Loading...</p>

    return (
        <div className="main-container">
        {items.map((item) => {
            return (
            <Card key={item.id} item={item} onClick={handleAddToCart}/>
            )
        })}
        </div>
    )
}