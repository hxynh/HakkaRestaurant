import AmountSection from "../components/AmountSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QtyBtn from "../components/QtyBtn";
import { useAppSelector } from "../app/store";

export default function Cart() {
  const  cartItems = useAppSelector(state => state.cart.orders)
  return (
    <>
        <Navbar />
        <div className="overflow-x-auto max-w-[60vw] min-h-[68.2vh] mx-auto my-5">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th className="font-bold text-lg uppercase w-1/6">qty</th>
                <th className="font-bold text-lg uppercase">order</th>
                <th className="font-bold text-lg uppercase float-end">amount</th>
            </tr>
            </thead>
            <tbody>
                {
                    cartItems.map((item) => (
                        <tr>
                            <th><QtyBtn order={item} /></th>
                            <td>{item.name}</td>
                            <td className="float-end">{(item.price * item.qty)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
        <AmountSection />
        <button className="btn btn-primary float-end">checkout</button>

        
       </div>

        <Footer />
    </>
  )
}
