import AmountSection from "../components/AmountSection";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function PlaceOrder() {
  return ( 
    <>
        <Navbar />
        <div className="overflow-x-auto max-w-[60vw] min-h-[68.2vh] mx-auto my-5">
        <div role="tablist" className="tabs tabs-bordered max-w-full lg:max-w-[60vw] mx-auto my-2 text-center grid-cols-7 lg:grid-cols-9">
          <Menu category={"lunch special"} defaultChecked={true}/>
          <Menu category={"chef's special"} defaultChecked={false}/>
          <Menu category={"apetizer"} defaultChecked={false}/>
          <Menu category={"soup"} defaultChecked={false}/>
          <Menu category={"rice"} defaultChecked={false}/>
          <Menu category={"noodles"} defaultChecked={false}/>
          <Menu category={"meat"} defaultChecked={false}/>
          <Menu category={"vegetable"} defaultChecked={false}/>
          <Menu category={"dessert"} defaultChecked={false}/>
        </div>
        <AmountSection />
        </div>
        <Footer />
    </>
  )
}
