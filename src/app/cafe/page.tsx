import Image from "next/image"
import cofecon from "../../../public/coffe con.jpeg"
import cold from "../../../public/cold coffe.jpeg"
import cafefrap from "../../../public/cafe frappe.jpeg"
import iced from "../../../public/icced cafe.jpeg"
import choco from "../../../public/chocolate.jpeg"
import cofedesert from "../../../public/coffe desert.jpeg"



export default function Cafe(){
    return(
        <>
        <h1 className="flex justify-center items-center w-full text-center text-white text-2xl sm:text-3xl md:text-4xl bg-[#C7253E] p-2 mt-10" data-aos="zoom-in-up">
    Coffee Cafe
</h1>

        <div id="box" className=" section "data-aos="zoom-in-up">
           <div className=" box">
               <div className= "box-content">
                <h1> Coffee Con</h1>
                 <div className="box-img">
                 <Image src={cofecon} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Cold Coffee</h1>
                 <div className="box-img">
                 <Image src={cold} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Cafe Frappe</h1>
                 <div className="box-img">
                 <Image src={cafefrap}alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Chocolate Coffee</h1>
                 <div className="box-img">
                 <Image src={choco} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1>Iced Coffee</h1>
                 <div className="box-img">
                 <Image src={iced} alt="burger image"></Image>
                 </div>
               </div>
           </div>
   
           <div className=" box">
               <div className= "box-content">
                <h1> Coffee Desert</h1>
                 <div className="box-img">
                 <Image src={cofedesert} alt="burger image"></Image>
                 </div>
               </div>
           </div>
        </div>

        </>  
    )
}