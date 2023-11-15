import { Offcanvas, OffcanvasTitle, Stack } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import storeItems from "../data/items.json";
import { closeCart } from "../features/cart/cartSlise";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { cartItem } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()


    return <Offcanvas show={isOpen} onHide={()=> dispatch(closeCart())} placement="end">
        <Offcanvas.Header closeButton>
            <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItem.map(item => (
                <CartItem key={item.id} {...item} />
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Total {formatCurrency(cartItem.reduce((total, cartItem) => {
                       const item = storeItems.find(i => i.id === cartItem.id)
                       return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                    )}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}