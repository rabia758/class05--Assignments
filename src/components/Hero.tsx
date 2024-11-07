import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo.webp"
import burger from "../../public/burger img.webp"
import pizza from "../../public/classic  chees pizzza.jpeg"
import fries from "../../public/baked fries.jpeg"
import twister from "../../public/roll.jpeg"
import cafe from "../../public/cafe.jpg"
import chiken from "../../public/chiken.webp"

export default function Hero(){
    return(
        <>
    
    <section className="fast-food-section bg-[40%]  kenburns-top duration-300 flex flex-row-reverse">
        <Image src={logo} width={450} height={450} alt="Delicious fast food"  objectFit="cover"data-aos="zoom-in-up" />
        
        <div className="text-[#C7253E] h-[250px] sm:h-auto w-full mt-6 sm:mt-0 text-3xl pt-10">
            <h1 className="fast-food-title flex-wrap  text-center text-3xl bg-[#e7cc96] duration-500" data-aos="zoom-in-up">
                Fast Food Eats, Delivered in Karachi
            </h1>
            <br />
            <p className="fast-food-description text-xl sm:flex-row">
                Everyone loves fried chicken, burgers, pizza & more! Take a juicy piece of chicken, 
                coat it in a slightly spicy batter, and fry until golden brown and crispy.
            
            </p>
        </div>
    </section>

    <div id="box" className=" section " data-aos="zoom-in-up">
        <div className=" box">
            <div className= "box-content">
             <h1>Burger</h1>
              <div className="box-img">
              <Image src={burger} alt="burger image"></Image>
              </div>
              <Link href={"./burger"}><button className="btn"> See More</button></Link>
            </div>   
        </div>

        <div className=" box ">
            <div className= "box-content ">
             <h1>Pizza</h1>
              <div className="box-img ">
              <Image src={pizza} alt="burger image"></Image>
              </div>
              <Link href={"./pizza"}><button className="btn"> See More</button></Link>
            </div>   
        </div>

        <div className=" box ">
            <div className= "box-content  ">
             <h1>Fries</h1>
              <div className="box-img ">
              <Image src={fries} alt="burger image"></Image>
              </div>
              <Link href={"./fries"}><button className="btn"> See More</button></Link>
            </div>   
        </div>

        <div className=" box ">
            <div className= "box-content">
             <h1>Crispy Chicken</h1>
              <div className="box-img ">
              <Image src={chiken} alt="burger image"></Image>
              </div>
              <Link href={"./chicken"}><button className="btn"> See More</button></Link>
            </div>   
        </div>

        <div className=" box ">
            <div className= "box-content">
             <h1>Twister Roll</h1>
              <div className="box-img ">
              <Image src={twister} alt="burger image" ></Image>
              </div>
              <Link href={"./roll"}><button className="btn"> See More</button></Link>
            </div>   
        </div>

        <div className=" box ">
            <div className= "box-content">
             <h1>Cafe</h1>
              <div className="box-img ">
              <Image src={cafe} alt="burger image"></Image>
              </div>
              <Link href={"./cafe"}><button className="btn"> See More</button></Link>
            </div>   
        </div>
    </div>
    </>
    )
}