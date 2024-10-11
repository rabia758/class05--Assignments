import Image from "next/image"
import chees from "../../../public/chees fries.jpeg"
import  chillichees from "../../../public/chilli chees fries.jpeg"
import chilli from "../../../public/chilli fries.jpeg"
import baked from "../../../public/baked fries.jpeg"
import air from "../../../public/air fryer frozen fries.jpeg"
import garlic from "../../../public/garlic butter fries.jpeg"



export default function Fries(){
    return(
        <>
        <h1 className="flex justify-center items-center w-full text-center text-white text-2xl sm:text-3xl md:text-4xl bg-[#C7253E] p-2 mt-10" data-aos="zoom-in-up">
    Fries
</h1>

        <div id="box" className=" section " data-aos="zoom-in-up">

           <div className=" box">
               <div className= "box-content">
                <h1> Chees Fries</h1>
                 <div className="box-img">
                 <Image src={chees} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Chilli Chees</h1>
                 <div className="box-img">
                 <Image src={chillichees} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Chilli Fries</h1>
                 <div className="box-img">
                 <Image src={chilli} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Baked Fries</h1>
                 <div className="box-img">
                 <Image src={baked} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Air Fryer Fries</h1>
                 <div className="box-img">
                 <Image src={air} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Garlic Fries</h1>
                 <div className="box-img">
                 <Image src={garlic} alt="burger image"></Image>
                 </div>
               </div>
           </div>
        </div>
        </>    

    )
}