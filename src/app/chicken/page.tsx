import Image from "next/image"
import hot from "../../../public/hot chicken.jpeg"
import koren from "../../../public/koren fried chicken.jpeg"
import butter from "../../../public/buttermilk.jpeg"
import spicy from "../../../public/spicy.jpeg"
import grill from "../../../public/grilled chicken.jpeg"
import southern from "../../../public/southern fried.jpeg"

export default function Chicken(){
    return(
        <>
        <h1 className="flex justify-center items-center w-full text-center text-white text-2xl sm:text-3xl md:text-4xl bg-[#C7253E] p-2 mt-10" data-aos="zoom-in-up">
    Chicken Frie
</h1>

        <div id="box" className=" section "data-aos="zoom-in-up">
           <div className=" box">
               <div className= "box-content">
                <h1> Hot Chicken</h1>
                 <div className="box-img">
                 <Image src={hot} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Koren Fried Chicken</h1>
                 <div className="box-img">
                 <Image src={koren} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Buttermilk Chicken</h1>
                 <div className="box-img">
                 <Image src={butter} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Grilled Chicken</h1>
                 <div className="box-img">
                 <Image src={grill} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Southern Fried Chicken</h1>
                 <div className="box-img">
                 <Image src={southern} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Spicy Chicken</h1>
                 <div className="box-img">
                 <Image src={spicy} alt="burger image"></Image>
                 </div>
               </div>
           </div>
        </div>
        </>    

    )
}