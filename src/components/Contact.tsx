export default function Contact(){
    return(
        <>
        <div>
    <div className="container flex justify-center items-center mt-5 p-8">
        <div id="contact" className="text-3xl bg-[#e7cc96] text-[#C7253E] h-[250] w-[100%]">
            <h1 className="text-center bg-[#821131] text-white p-10 text-4xl" data-aos="zoom-in-up">
                Welcome To Fast Food!
            </h1>
            <br />
            <fieldset className="field mb-4">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" placeholder="Enter Your Phone Number" required className="w-full p-2"/>
            </fieldset>

            <fieldset className="field mb-4">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter Your Email" required className="w-full p-2"/>
            </fieldset>

            <fieldset className="field mb-4">
                <label htmlFor="address">Address:</label>
                <textarea name="address" id="address" placeholder="Enter Your Address" rows={8} required className="w-full p-2"></textarea>
            </fieldset>
            <button className="btn text-center p-2 bg-[#C7253E] text-white hover:bg-[#821131]">
                Order Now!
            </button>
        </div>
    </div>
</div>

      </>
    )
    
}