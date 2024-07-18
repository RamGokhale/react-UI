import img from "../assets/img/logo.png"
function Navbar() {
    return (
        <>
            <nav className="flex  items-center py-10 mx-7">
                <div className="w-[45px] h-[45px] ml-[77px] " >
                    <img src={img} className=" "></img>
                </div>
                <div className=" flex items-center pl-[30rem] gap-28 ">
                    <div  className="tracking-wide font-semibold text-[#596774] ">HOME</div>
                    <div className="tracking-wide font-semibold text-[#596774] z-40">PRODUCTS</div>
                    <div className="tracking-wide font-semibold text-[#596774] z-40">Gallery</div>
                    <div className="tracking-wide font-semibold text-[#596774] z-40">CONTACT</div>
                    <button className="bg-gradient-to-r from-[#9AE0D3] to-[#35A7A0] px-5 py-2 rounded-md text-white tracking-wide font-semibold z-40">LOGIN</button>
                </div>



            </nav>
        </>
    )
}
export default Navbar;