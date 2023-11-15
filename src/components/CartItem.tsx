import { Button, Stack } from "react-bootstrap"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { removeFromCart } from "../features/cart/cartSlise"
import { useDispatch } from "react-redux"


type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem( {id, quantity }: CartItemProps) {

    const dispatch = useDispatch()

    const item = storeItems.find(i => i.id === id)
    if(item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className=" d-flex align-items-center">
        <img src={item.imgUrl} style={{ width: "125px", height:"75px" , objectFit: "cover"}} />
        <div className="me-auto">
            <div>
                {item.name} {quantity > 1 && <span className="text-muted" style={{fontSize: ".75rem"}}>x{quantity}</span>}
            </div>
            <div className="text-muted" style={{fontSize:".85rem"}}>
                {formatCurrency(item.price)}
            </div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={() => dispatch(removeFromCart(item.id))}>&times;</Button>
    </Stack>
  )
}
