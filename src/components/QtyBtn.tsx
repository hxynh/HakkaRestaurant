import { useAppDispatch } from "../app/store"
import { decrement, increment, enterQuantity } from "../features/cart/cartSlice"

type QuantityProp = {
  order: {
    id: string,
    category: string,
    name: string,
    price: number,
    qty: number
  }
}

export default function QtyBtn(props: QuantityProp) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-fit">
      <div 
        onClick={() => dispatch(decrement(props.order.id))}
        className="w-6 h-6 bg-slate-300 p-0 rounded-full text-lg/0 font-bold text-center align-center hover:cursor-pointer">-</div>
      <input 
        className="w-9 h-6 mx-2 text-center border-solid border-2 border-slate-200 rounded-md" 
        value={props.order.qty}
        onChange={(e) => {
              dispatch(enterQuantity({orderId: props.order.id, qty: Number(e.target.value)}))
            }}/>
      <div 
        onClick={() => dispatch(increment(props.order.id))}
        className="w-6 h-6 bg-slate-300 p-0 rounded-full text-lg/0 font-bold text-center align-center hover:cursor-pointer">+</div>
    </div>
  )
}
