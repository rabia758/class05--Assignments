import Image from "next/image"
import chees from "../../../public/chees burger.jpeg"
import zinger from "../../../public/zinger burger.jpeg"
import doublezinger from "../../../public/double zinger.jpeg"
import eggmutton from "../../../public/egg mutton burger.jpeg"
import burgersandwich from "../../../public/burger and sandwich.jpg"
import juice from "../../../public/juicee burger.jpg"

export default function Burger(){
    return(
        <>
        <h1 className="flex justify-center items-center w-full text-center text-white text-2xl sm:text-3xl md:text-4xl bg-[#C7253E] p-2 mt-10" data-aos="zoom-in-up">
    Burger Item
</h1>

     <div id="box" className=" section "data-aos="zoom-in-up">
        <div className=" box">
            <div className= "box-content">
             <h1> Chees Burger</h1>
              <div className="box-img">
              <Image src={chees} alt="burger image"></Image>
              </div>
            </div>
        </div>

        <div className=" box">
            <div className= "box-content">
             <h1> zinger Burger</h1>
              <div className="box-img">
              <Image src={zinger} alt="burger image"></Image>
              </div>
            </div>
        </div>

        <div className=" box">
            <div className= "box-content">
             <h1> Double Zinger Burger</h1>
              <div className="box-img">
              <Image src={doublezinger} alt="burger image"></Image>
              </div>
            </div>
        </div>

        <div className=" box">
            <div className= "box-content">
             <h1> Egg Mutton Burger</h1>
              <div className="box-img">
              <Image src={eggmutton} alt="burger image"></Image>
              </div>
            </div>
        </div>

        <div className=" box">
            <div className= "box-content">
             <h1> Burger & Sandwich</h1>
              <div className="box-img">
              <Image src={burgersandwich} alt="burger image"></Image>
              </div>
            </div>
        </div>

        <div className=" box">
            <div className= "box-content">
             <h1> Juice Burger</h1>
              <div className="box-img">
              <Image src={juice} alt="burger image"></Image>
              </div>
            </div>
        </div>
     </div>
     </>    
    )
}