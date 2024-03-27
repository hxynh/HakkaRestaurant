export default function AmountSection() {
  return (
    <div className="flex justify-end w-full h-full bg-gray-200 p-5 my-8">
        <table className="table-auto text-right ">
            <tbody> 
                <tr>
                    <td className="font-semibold pr-8">Subtotal</td>
                    <td>40.00</td>
                </tr>
                <tr>
                    <td className="font-semibold pr-8">Tax</td>
                    <td>9.99</td>
                </tr>
                <tr>
                    <td className="font-semibold pr-8">Promo</td>
                    <td>0.00</td>
                </tr>
                <tr className="font-semibold text-primary">
                    <td className=" pr-8">Total</td>
                    <td>49.99</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
