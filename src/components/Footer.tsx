import Link from "next/link"
export default function Footer(){
    return(
        <>
        <div className="footer "> 
        <div className="footer-1"data-aos="zoom-in-up">
          <Link href={"/"}> Back to top</Link>
        </div>
        <div className="footer-2">
        <ul className="mt-[20px]">
                  <li className="list-none mt-15 text-0.85rem">Help Center</li>
                  <li className="list-none mt-15 text-0.85rem">How to order</li>
                  <li className="list-none mt-15 text-0.85rem"> Returns & Refunds</li>
                  <li className="list-none mt-15 text-0.85rem" >Easy to order</li>
                  <li className="list-none mt-15 text-0.85rem">Contact Us</li>
                
            </ul>
            <ul className="mt-[20px]">
                <li className="list-none mt-15 text-0.85rem">Healthy</li>
                <li className="list-none mt-15 text-0.85rem">Fast food </li>
                <li className="list-none mt-15 text-0.85rem">Good Health</li>
                <li className="list-none mt-15 text-0.85rem">Self-Publish with Us</li>
                <li className="list-none mt-15 text-0.85rem">Help</li>
            </ul>
            <ul className="mt-[20px]">
                <li className="list-none mt-15 text-0.85rem">Terms And Condition</li>
                <li className="list-none mt-15 text-0.85rem">About us</li>
                <li className="list-none mt-15 text-0.85rem">Privacy Policy</li>
                <li className="list-none mt-15 text-0.85rem">Digital Payment</li>
            </ul>
        </div>
        </div>
        </>
    )
}