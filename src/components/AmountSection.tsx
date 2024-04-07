import { useAppSelector } from "../app/store"

export default function AmountSection() {
    const {subtotal, promo} = useAppSelector(state => state.cart.total);

  return (
    <div className="flex justify-end w-full h-full bg-gray-200 p-5 my-8">
        <table className="table-auto text-right ">
            <tbody> 
                <tr>
                    <td className="font-semibold pr-8">Subtotal</td>
                    <td>{Math.abs(subtotal).toFixed(2)}</td>
                </tr>
                <tr>
                    <td className="font-semibold pr-8">Tax</td>
                    <td>{Math.abs(subtotal * 0.13).toFixed(2)}</td>
                </tr>
                <tr>
                    <td className="font-semibold pr-8">Promo</td>
                    <td>{promo}</td>
                </tr>
                <tr className="font-semibold text-primary">
                    <td className=" pr-8">Total</td>
                    <td>{Math.abs(subtotal * 1.13).toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
