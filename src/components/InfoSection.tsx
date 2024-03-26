export default function InfoSection() {
  return (
    <div className="flex flex-col w-full min-h-60 px-14 mb-12 lg:flex-row">
        <div className="flex-grow card bg-base-300 rounded-box place-items-center pb-5">
            <h2 className="uppercase font-bold my-5">opening hours</h2>    
            <ul className="text-left">
                <li>mon&emsp;11:00am - 9:00pm</li>
                <li>tue&emsp;11:00am - 9:00pm</li>
                <li>wed&emsp;11:00am - 9:00pm</li>
                <li>thu&emsp;11:00am - 9:00pm</li>
                <li>fri&emsp;11:00am - 9:00pm</li>
                <li>sat&emsp;11:00am - 9:00pm</li>
                <li>sun&emsp;11:00am - 9:00pm</li>
            </ul>
        </div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="flex-grow card bg-base-300 rounded-box place-items-center pb-5">
            <h2 className="uppercase font-bold my-5">contact us</h2>
            <p className="text-left">(416) 292 - 888<br />xyz@gmail.com</p>
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className="flex-grow card bg-base-300 rounded-box place-items-center pb-5">
            <h2 className="uppercase font-bold my-5">location</h2>
            <p className="text-left">735 Middlefield Road, Unit 4-5<br />Scarborough, Ontario M1V 5H5</p>
        </div>
    </div>
  )
}
