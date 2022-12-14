// import Atom from 
import { useState } from "react";
import MyModal from "./modal";
import { motion } from "framer-motion";
const Intro = () => {

const containerVariants ={
    hidden:{
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity:1,
      x:0,
      transition: {
        type: 'spring',
        delay: 0.5
      }
    }
  }
  const nextVariants ={
    hidden:{
      x : '-100vw'
    },
    visible: {
      x:0,
      transition:{
        type:'spring',
        stiffness: 200
      }
    }
  }

  
    const [myModal, setMyModal] = useState(false)
    const handleClose = () => setMyModal(false)
    return (
        <>
            <div className="pt-[6rem] w-[22rem] md:w-screen ml-auto mr-auto md:pt-[10rem] ">

                <motion.h1 className="text-[orange] md:w-screen text-2xl md:text-4xl font-poppins font-bold text-left  md:ml-20">Okpanachi Emmanuel Okpanz</motion.h1>
                <div className="grid md:grid-cols-2 place-items-center ">
                    <h1 className="text-white md:leading-8 p-2 font-poppins text-left text-lg md:text-[2rem]  md:ml-20">As a Front-End Developer My aim is to provide the best UI that can you can easily interact with and carryout online activities, <br />
                        Building a fully responsive Website that will be available on all devices.<br />
                        Trust me with your Projects</h1>
                    <motion.img
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    src="images/Okpanz1.png" alt="" className="w-[70%]" />
                    <div className="my-3">
                        <button onClick={() => setMyModal(true)} className="text-black bg-stone-200 px-5 py-2 rounded-3xl hover:bg-orange-500 transition-all ease-in duration-500 hover:text-white font-poppins uppercase">Hire me</button>
                    </div>
                    <MyModal display={myModal} close={handleClose}/>
                </div>
            </div>
        </>
    );
}

export default Intro;
