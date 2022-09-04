import { HashLink as Link } from "react-router-hash-link"
import { BiMenuAltLeft } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
const Header = () => {
    const [open, setOpen] = useState(false)
    const navItem = [
        {
            id: "1",
            item: "Projects",
            link: "#projects"
        },
        {
            id: "2",
            item: "Technologies",
            link: "#tech"
        },
        {
            id: "3",
            item: "About me",
            link: "#about"
        }
        ,
        {
            id: "4",
            item: "Resume",
            link: "#about"
        }

    ]

    return (
        <>

            <nav className="">
                <div className="md:flex flex fixed w-full md:bg-primary bg-[orange] z-[10] p-5 md:p-10 ">
                    <h1 className="text-[#fff] text-right font-poppins text-2xl">Okpanachi .</h1>
                    <div onClick={() => setOpen(!open)} className={`${open ? "block" : " "}`}>

                        <div>
                            {
                                open ?
                                <div className="md:hidden text-white ml-auto absolute text-3xl top-[15px] right-[10px] transition-all duration-100 ">
                                    <IoMdClose />
                                    </div>
                                    :
                                    <div className="md:hidden text-white absolute right-[10px] text-3xl top-[15px] transition-all duration-100">
                                        <BiMenuAltLeft />
                                    </div>
                            }




                        </div>

                    </div>

                    <ul className={` md:flex absolute bg-[orange] transition-all duration-700 ease-in p-3  w-screen z-[-1] right-0 md:bg-[transparent] text-right md:text-center md:static lg:flex  md:w-1/2  mx-auto justify-evenly font-poppins  ${open ? `top-[40px]` : `right-[400px]`} `} >
                        {
                            navItem.map(nav => (
                                <Link key={nav.id} to={nav.link}>
                                    <li className="text-white md:text-center text-left-right bg- text-2xl hover:text-primary duration-500 cursor-pointer" key={nav.id}>{nav.item}</li>
                                </Link>
                            ))
                        }
                    </ul>
                    <div>
                        {/* <p className="text-white font-poppins">Okpanz</p> */}
                    </div>
                </div>

            </nav>

        </>
    );
}

export default Header;