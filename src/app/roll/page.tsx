import Image from "next/image";
import egg from "../../../public/eggs roll.jpeg"
import kabab from "../../../public/kabab roll.jpeg"
import vegs from "../../../public/vegs roll.jpeg"
import shawrma from "../../../public/shawrma.jpeg"
import chicken from "../../../public/chiken roll.jpeg"
import chinees from "../../../public/chines roll.jpeg"

export default function Roll(){
    return(
        <>
        <h1 className="flex justify-center items-center w-full text-center text-white text-2xl sm:text-3xl md:text-4xl bg-[#C7253E] p-2 mt-10" data-aos="zoom-in-up">
    Roll Item
</h1>

        <div id="box" className=" section " data-aos="zoom-in-up">
           <div className=" box">
               <div className= "box-content">
                <h1> Egg Roll</h1>
                 <div className="box-img">
                 <Image src={egg} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Vegs Roll</h1>
                 <div className="box-img">
                 <Image src={vegs} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Kabab Roll</h1>
                 <div className="box-img">
                 <Image src={kabab}alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Chicken Roll</h1>
                 <div className="box-img">
                 <Image src={chicken} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Chinees Roll</h1>
                 <div className="box-img">
                 <Image src={chinees} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Shawarma</h1>
                 <div className="box-img">
                 <Image src={shawrma} alt="burger image"></Image>
                 </div>
               </div>
           </div>
        </div>

        </>  

    )
}