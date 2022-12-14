import { HashLink as Link } from "react-router-hash-link"
import { BiMenuAltLeft } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import { motion } from "framer-motion"
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
        // ,
        // {
        //     id: "4",
        //     item: "Resume",
        //     link: "https://drive.google.com/file/d/1DA7JoTZaIAoBaxMeaCpTzo0eYiF_qlIC/view?usp=sharing"
        // }

    ]

    return (
        <>

            <motion.nav className="text-center absolute">
                <div className=" flex fixed w-full md:bg-primary bg-[orange] z-[10] p-5 md:p-10 ">
                    <motion.h1 
                    animate={{x:0}}
                    initial={{x: '-100vw'}}
                    transition={{type: 'spring', stiffness:'100'}}
                    className="text-white  text-right font-poppins text-2xl">Okpanachi.</motion.h1>
                    <div onClick={() => setOpen(!open)} className={`${open ? "block" : ""} transition-all cursor-pointer ease-in-out duration-200`}>

                        <div>
                            {
                                open ?
                                <div className="md:hidden text-white ml-auto absolute text-3xl top-[15px] right-[12px] transition-all ease-in duration-100 ">
                                    <IoMdClose />
                                    </div>
                                    :
                                    <div className="md:hidden text-white absolute right-[10px] text-3xl top-[15px] transition-all ease-out duration-100">
                                        <BiMenuAltLeft />
                                    </div>
                            }




                        </div>

                    </div>

        
                    <motion.ul 
                       animate={{opacity: 1, }}
                       initial={{opacity: 0}}
                       transition={{delay:1, duration:.5}}
                       className={` md:flex absolute bg-[orange] transition-all duration-700 ease-in-out p-5  w-screen z-[-1] right-0 md:bg-[transparent] text-center md:h-[1rem]  h-[20rem] md:text-center md:static lg:flex  mx-auto justify-evenly font-poppins  ${!open ? `left-[6001px]` : `right-[0px]`} `} >
                        {
                            navItem.map(nav => (
                                <Link key={nav.id} to={nav.link}>
                                    <motion.li whileHover={{fontSize: '1.5em'}}
                                    whileFocus={{fontSize: '1em'}}
                                    onClick={() => setOpen(!open)} className="text-white md:text-center  text-left-right bg- text-2xl md:hover:text-[orange] p-5 hover:text-primary duration-500 cursor-pointer" key={nav.id}>{nav.item}</motion.li>
                                </Link>
                            ))
                        }
                        <a href="https://drive.google.com/file/d/1DA7JoTZaIAoBaxMeaCpTzo0eYiF_qlIC/view?usp=sharing">
                                    <motion.li 
                                    whileHover={{fontSize: '1.5em'}}
                                    while={{fontSize: '1em',}}
                                    className="text-white md:text-center text-left-right bg- text-2xl md:hover:text-[orange] p-5 hover:text-primary duration-500 cursor-pointer">Resume</motion.li>
                        </a>
                        
                    </motion.ul>
                    <div>
                        {/* <p className="text-white font-poppins">Okpanz</p> */}
                    </div>
                </div>

            </motion.nav>

        </>
    );
}

export default Header;