import { MenuProps } from "./Menu"

export default function MenuItems({category} : MenuProps) {
  return (
    <div role="tabpanel" className="tab-content p-10">
        <div className="overflow-x-auto max-w-[60vw]">
            <table className="table ">
            <tbody>
                {/* row 1 */}
                <tr className="hover">
                <td>Manchurian {category}</td>
                <td><button className="btn btn-primary float-end">add to cart</button></td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                <td>Hot & Sour </td>
                <td><button className="btn btn-primary float-end">add to cart</button></td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                <td>Thai Soup</td>                    
                <td><button className="btn btn-primary float-end">add to cart</button></td>
                </tr>
                <tr className="hover">
                <td>Corn Soup</td>                    
                <td><button className="btn btn-primary float-end">add to cart</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
