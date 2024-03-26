import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="max-w-[65vw] min-h-[60vh] mx-auto my-10 px-20 bg-secondary">
        <h1 className="py-9 text-4xl font-bold tracking-widest uppercase">about us</h1>
        <p className="text-left pb-5">
        In his younger days, Danny spent much of his time at his grandmother's restaurant. Unlike his parents who were entrepreneurs in the leather business, Danny found his passion in the kitchen. During his early adult life, Danny decided to immigrate to Europe. Thanks to the support of his family, Danny opened a successful pizzeria in Wien, Austria.
        <br /> <br />
        family immigrated to Toronto, Canada. With a menu of delicious Hakka and Cantonese recipes, Danny and Margarita opened New Golden City in 1998 the fast-paced heart of downtown Toronto. Their shared entrepreneurial spirit and love of food enabled them to build a successful business in the downtown core. After many years, they decided it was time for a change of pace, a little closer to home. Instead of the bustle of downtown, it was time to slow down for a more intimate dining experience, where Danny and Margarita could get to know their customers, their stories and why they love Hakka food.
        <br /> <br />
        In 2003, Royal Chinese Seafood Restaurant became part of the Liu family. While their love of food in Scarborough, catering to their customers many changes have taken place; menu changes, renovations and welcoming new staff members. Today, Danny & Margarita invite you to come and experience their passion for serving delicious, authentic, Indian Chinese Hakka and Cantonese Cuisine.
        <br /> <br />
        Royal Chinese Seafood Restaurant is celebrated as one of the best authentic Hakka restaurants in Toronto.
        </p>
      </div>
      <Footer />
    </>
  )
}
