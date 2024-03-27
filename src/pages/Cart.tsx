import AmountSection from "../components/AmountSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QtyBtn from "../components/QtyBtn";

export default function Cart() {
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
            {/* row 1 */}
            <tr>
                <th><QtyBtn /></th>
                <td>Cy Ganderton</td>
                <td className="float-end">10.99</td>
            </tr>
            {/* row 2 */}
            <tr>
                <th><QtyBtn /></th>
                <td>Hart Hagerty</td>
                <td className="float-end">29.97</td>
            </tr>
            </tbody>
        </table>
        
        <AmountSection />
        <button className="btn btn-primary float-end">checkout</button>

        
       </div>

        <Footer />
    </>
  )
}
