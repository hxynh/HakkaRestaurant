import { MenuProps } from "./Menu"
import products from "../assets/products.json"
import { useAppDispatch, useAppSelector } from "../app/store"
import { addNewItem, increment } from "../features/cart/cartSlice"

export default function MenuItems({category} : MenuProps) {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(state => state.cart.orders);
  const filterProducts = products.filter((item) => item.category === category)

  return (
    <div role="tabpanel" className="tab-content p-10">
        <div className="overflow-x-auto max-w-[60vw]">
            <table className="table ">
            <tbody>
              {filterProducts.length === 0 && <p>No stock at the moment</p>}
              {filterProducts.length > 0 &&
                filterProducts.map((item) => (
                  <tr key={item.id} className="hover" >
                  <td>
                    <div className="flex flex-col">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>
                    </td>
                  <td><button 
                    className="btn btn-primary float-end"
                    onClick={() => {
                      if(orders.some(order => order.id === item.id)) {
                        dispatch(increment(item.id))
                      }
                      else {
                        dispatch(addNewItem({...item, qty: 1}))
                      }
                    
                    }}
                    >add to cart</button></td>
                </tr>
                ))
              }
              
            </tbody>
            </table>
        </div>
    </div>
  )
}
