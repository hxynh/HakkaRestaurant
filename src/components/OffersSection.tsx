export default function OffersSection() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title uppercase font-bold tracking-wider">cash discount</h2>
            <p className="text-left lowercase font-normal">10% off for Pick-up Orders above $15.00 before Tax (cash only and specials are excluded).Prices and menu options subject to change without notice.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">View Menu</button>
            </div>
        </div>
    </div>
  )
}
