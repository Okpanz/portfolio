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

    ]

    return (
        <>

            <div >
                <div className="md:flex flex fixed w-full md:bg-primary bg-[blue] p-5 md:p-10 ">
                    <h1 className="text-[#fff] text-right font-poppins text-2xl">Okpanachi .</h1>
                    <div onClick={() => setOpen(!open)} className={`${open ? "block" : "hidden"}`}>

                        <div>
                            {
                                open ?
                                    <div className="md:hidden text-white ml-auto absolute text-3xl top-1 right-0 ">
                                        <BiMenuAltLeft />
                                    </div>
                                    :
                                    <div className="md:hidden text-white absolute right-0 text-3xl top-1">
                                        <IoMdClose />
                                    </div>
                            }




                        </div>

                    </div>

                    <ul className=" md:flex absolute bg-[blue] transition-all duration-500 ease-in p-3  w-screen z-[-1] right-0 md:bg-[transparent] text-right md:text-center md:static lg:flex w-auto lg:flex md:w-1/2  mx-auto justify-evenly font-poppins  " >
                        {
                            navItem.map(nav => (
                                <Link key={nav.id} to={nav.link}>
                                    <li className="text-white md:text-center text-left-right bg- text-2xl hover:text-[orange] duration-500 cursor-pointer" key={nav.id}>{nav.item}</li>
                                </Link>
                            ))
                        }
                    </ul>
                    <div>
                        {/* <p className="text-white font-poppins">Okpanz</p> */}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Header;