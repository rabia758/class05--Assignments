import Image from "next/image"
import chiken from "../../../public/chiken pizza.jpeg"
import bbq from "../../../public/bbq chiken pizza.jpeg"
import fruit from "../../../public/fruit pizza.jpeg"
import chees from "../../../public/garlic chees pizza.jpeg"
import peproni from "../../../public/pepproni pizza.jpeg"
import veegi from "../../../public/veggie pizza.jpeg"



export default function Pizza(){
    return(
        <>
       <h1 className="flex justify-center items-center w-full text-center text-white text-2xl sm:text-3xl md:text-4xl bg-[#C7253E] p-2 mt-10" data-aos="zoom-in-up">
    PIZZA
</h1>
 
        <div id="box" className=" section " data-aos="zoom-in-up">
           <div className=" box">
               <div className= "box-content">
                <h1> Chiken Pizza</h1>
                 <div className="box-img">
                 <Image src={chiken} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>BB Chiken Pizza</h1>
                 <div className="box-img">
                 <Image src={bbq} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Chees Pizza</h1>
                 <div className="box-img">
                 <Image src={chees}alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Peproni Pizza</h1>
                 <div className="box-img">
                 <Image src={peproni} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Veggie Pizza</h1>
                 <div className="box-img">
                 <Image src={veegi} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Fruite Pizza</h1>
                 <div className="box-img">
                 <Image src={fruit} alt="burger image"></Image>
                 </div>
               </div>
           </div>
        </div>

        </>  
    )
}