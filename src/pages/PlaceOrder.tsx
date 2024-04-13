import AmountSection from "../components/AmountSection";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../app/store";
import { getMenu } from "../features/menu/menuSlice"
import { useEffect } from "react";


export default function PlaceOrder() {
  const dispatch = useAppDispatch();
  const {menuList, loading} = useAppSelector((state) => state.menu)

  useEffect(() => {
    dispatch(getMenu())
  }, [])

  return ( 
    <>
        <Navbar />
        <div className="overflow-x-auto max-w-[60vw] min-h-[68.2vh] mx-auto my-5">
        <div role="tablist" className="tabs tabs-bordered max-w-full lg:max-w-[60vw] mx-auto my-2 text-center grid-cols-7 lg:grid-cols-9">
          {loading === 'pending' && <p>Pending...</p>}
          {loading === 'failed' && <p>Rejected...</p>}
          {loading === 'succeeded' && 
          <>
            {
              menuList.map(item => 
                <>
                <Menu key={item['_id'].toString()} category={Object.keys(item)[1]} defaultChecked={Object.keys(item)[1]=== 'soup'}/> 
                </>
            )}
          </>
              
            
          }
        </div>
        <AmountSection />
        </div>
        <Footer />
    </>
  )
}
