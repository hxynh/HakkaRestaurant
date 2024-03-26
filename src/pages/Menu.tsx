import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Menu() {
  return ( 
    <>
        <Navbar />
        <div role="tablist" className="tabs tabs-bordered max-w-[60vw] mx-auto text-center gap-x-20">
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="lunch special"/>
          <div role="tabpanel" className="tab-content p-10">lunch special</div>

          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="chef's special"/>
          <div role="tabpanel" className="tab-content p-10">chef's special</div>

          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="appetizer" />
          <div role="tabpanel" className="tab-content p-10">appetizer</div>
          
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="soup" checked/>
          <div role="tabpanel" className="tab-content p-10"><div className="overflow-x-auto max-w-[60vw]">
              <table className="table ">
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <td>Manchurian Soup</td>
                    <td><button className="btn btn-primary">add to cart</button></td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <td>Hot & Sour </td>
                    <td><button className="btn btn-primary">add to cart</button></td>
                  </tr>
                  {/* row 3 */}
                  <tr className="hover">
                    <td>Thai Soup</td>                    
                    <td><button className="btn btn-primary">add to cart</button></td>
                  </tr>
                  <tr className="hover">
                    <td>Corn Soup</td>                    
                    <td><button className="btn btn-primary">add to cart</button></td>
                  </tr>
                </tbody>
              </table>
            </div></div>
          
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="rice" />
          <div role="tabpanel" className="tab-content p-10">rice</div>
          
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="noodles" />
          <div role="tabpanel" className="tab-content p-10">noodles</div>
          
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="meat" />
          <div role="tabpanel" className="tab-content p-10">meat</div>
          
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="vegetable" />
          <div role="tabpanel" className="tab-content p-10">vegetable</div>
        </div>
        <Footer />
    </>
  )
}
