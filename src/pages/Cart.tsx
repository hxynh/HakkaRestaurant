import AmountSection from "../components/AmountSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QtyBtn from "../components/QtyBtn";
import { useAppDispatch, useAppSelector } from "../app/store";
import { addCustomerInfo, emptyCart } from "../features/cart/cartSlice";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Cart() {
  const  cartItems = useAppSelector(state => state.cart.orders)
  const customerInfo = useAppSelector(state => state.cart.customer)
  const subtotal = useAppSelector(state => state.cart.total.subtotal)
  const [modalIsOpen, setModalIsOpen] = useState <boolean>(false);
  const dispatch = useAppDispatch();

  const onOpen = () => {
    setModalIsOpen(true)
  }

  const onClose = () => {
    dispatch(emptyCart())
    setModalIsOpen(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    dispatch(addCustomerInfo(JSON.stringify(data)))
  }

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
                        <tr key={item.id}>
                            <th><QtyBtn order={item} /></th>
                            <td>{item.name}</td>
                            <td className="float-end">{(item.price * item.qty)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
        <AmountSection />
    
        <button 
            disabled={cartItems.length <= 0}
            className={`btn btn-primary float-end`}
            onClick={onOpen}>checkout
        </button>

        <Modal isOpen={modalIsOpen} 
            onClose={onClose}>
                {customerInfo.name === "" && 
                    <form onSubmit={handleSubmit} className="mt-6">
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                        *Name:
                            <input name="name" type="text" className="grow" placeholder="Your Name" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                        *Phone Number:
                            <input name="phoneNumber" type="text" className="grow" placeholder="Your Phone Number" 
                            required/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                        Email:
                            <input name="email" type="text" className="grow" placeholder="Your Email" />
                        </label>
                        <button className="btn">continue</button>
                    </form>
                }
                {customerInfo.name !== "" && 
                <>
                    <h1 className="text-2xl font-semibold">Thank you!</h1>
                    <div className="p-5">
                        <h2 className="text-lg">Your order has been successfully submitted for pickup!</h2>
                        <p>Total amount payable <strong>${Math.abs(subtotal*1.13).toFixed(2)}</strong></p>
                        <p>Your order will be ready in about 10 - 15 mins!</p>
                    </div>
                </>
                }
        </Modal>

        
       </div>

        <Footer />
    </>
  )
}
