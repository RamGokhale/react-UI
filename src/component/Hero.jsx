import hero from "../assets/img/hero.png"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
function Hero() {
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                {/* left */}
                <div className="relative top-[-65px] left-28  space-y-5 ">
                    <p className="font-semibold tracking-[26px] mx-[12px] "> LET'S RIDE THE </p>
                    <h1 className="font-semibold text-9xl"> FUTURE </h1>
                    <p className="font-semibold text-xl text-[#42454A] mx-[12px] py-5">Simple and sleek design <br /> with user in Mind </p>
                    <button className="border rounded-md py-3 px-4 bg-gradient-to-r from-[#AFE9FD] to-[#73ADC1] "> PRE-ORDER</button>

                </div>
                {/* right */}
                <div className="w-[60%]  py-20 bg-gradient-to-r from-[#D8E6EF] to-[#B4D8E4] rounded-bl-[70rem]   relative bottom-[129px] ">
                    <h1 className="font-bold text-white relative top-[237px] text-center text-9xl font-[Neumatic Gothic] z-40 left-[-54px]">EV B</h1>
                    <img className=" relative bottom-[25px] right-[1px] w-[60%] z-40" src={hero} alt="image"></img>
                    <div className="flex flex-col absolute right-0 top-0 h-screen">
                        <div className=" bg-[#6DC7BD]  w-10 h-1/2 px-20 tracking-[10px] text-center" style={{writingMode : "vertical-lr"}}> THE CONCEPT </div>
                        <div className=" bg-gradient-to-r from-[#89C8DD] to-[#73ADC1] tracking-[10px] w-10 h-1/2 px-20 text-center" style={{writingMode : "vertical-lr"}}> ELECTRIC-B</div>
                    </div>

                    <div className="flex  flex-row relative top-[42px] left-[268px] border-[#B4D8E4] rounded-lg  bg-[#86c4d98e] w-96 text-center px-8 py-5 space-x-3">
                        <div> 50km/hr <br />speed </div>
                        <div>80km<br /> batteryrange</div>
                        <div>3.5hr <br /> changingtime</div>
                    </div>

                </div>




            </div>
            <div className="flex  flex-row justify-between items-center px-8">
                <div className="flex items-center"> <FaChevronLeft /> Prev </div>
                <div className="font-bold text-black rounded-full"> ....</div>
                <div className="flex items-center z-30"> Next <FaChevronRight /></div>

            </div>


        </>
    )
}
export default Hero

//