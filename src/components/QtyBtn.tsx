
export default function QtyBtn() {
  return (
    // <div className="w-1/2 h-7 bg-gray-400 flex justify-between ">
    //     <span className="w-9 text-center py-1 bg-slate-600">-</span>
    //     <input type="text" className="input input-bordered rounded-none w-1/6 h-full max-w-xs my-0" />
    //     <span className="w-9 text-center py-1 bg-slate-600">+</span>
    // </div>
    <div className="flex w-fit">
      <div className="w-6 h-6 bg-slate-300 p-0 rounded-full text-lg/0 font-bold text-center align-center hover:cursor-pointer">-</div>
      <input className="w-9 h-6 mx-2 text-center border-solid border-2 border-slate-200 rounded-md" />
      <div className="w-6 h-6 bg-slate-300 p-0 rounded-full text-lg/0 font-bold text-center align-center hover:cursor-pointer">+</div>
    </div>
  )
}
