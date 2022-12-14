import ProgressBar from "@ramonak/react-progress-bar";
import Button from './button'
import {    Link   } from "react-router-dom";
import {motion} from 'framer-motion'
  
import {Tech} from "../data"
const Projects = () => {

    const projectData = [
        {
            id: 1,
            url : "https://buynbulk2022.vercel.app",
            projectImage: "images/buynbulk.png",
            projectTitle: "BuynBulk",
            projectDescription: "BuyinBulk is an Agriculture crowdfunding site that enables buyers and consumer come together buy a product of large quantity in bit by crowdfunding with othere interested consumers"
        }, {
            id: 2,
            projectImage: "images/pis.png",
            projectTitle: "Plateau State Investment",
            projectDescription: "PSOSIC is a plateau state government website for investment and tourist attraction to the home of Tourism Plateau State is the twelfth largest state of Nigeria, and is roughly located in the center of the country. "
        }, 
        {
            id : 3,
            url : "https://chefcherrycuisine.com/",
            projectImage : "images/Chefcherry.png",
            projectTitle: "ChefCherry Cuisine",
            projectDescription : "Chef Cherry Cuisine is an Online vendor for baking and interested parties to come online and make purchases (Sells Cake and Bakes)"
        }
        // {
        //     id: 3,
        //     projectImage: "images/WhatsApp Image 2022-08-25 at 6.09.19 PM.jpeg",
        //     projectTitle: "BuynBulk",
        //     projectDescription: "Lorem ipsum dolor sit amet Qui quibusdam consequuntur necessitatibus officia nostrum ea in. Voluptatem velit id,aliquid odio repellendus, eligendi architecto omnis laudantiumlibero vero atque rerum?"
        // }, {
        //     id: 4,
        //     projectImage: "images/WhatsApp Image 2022-08-25 at 6.09.19 PM.jpeg",
        //     projectTitle: "BuynBulk",
        //     projectDescription: "Lorem ipsum dolor sit amet Qui quibusdam consequuntur necessitatibus officia nostrum ea in. Voluptatem velit id,aliquid odio repellendus, eligendi architecto omnis laudantiumlibero vero atque rerum?"
        // },
    ]
    const tech = [
        {
            id: "1",
            progress: "80",
            level : "Advanced",
            language : "HTML, CSS"
        }, 
        {
            id: "2",
            progress: "60",
            level : "Intermidiate",
            language : "Bootstrap, Tailwindcss"
        }, 
        {
            id: "3",
            progress: "70",
            level : "Intermidiate",
            language : "Javascript, Reactjs, Nextjs"
        },
         {
            id: "4",
            progress: "60",
            level : "Intermidiate",
            language : "Wordpress"
        },
         {
            id: "5",
            progress: "40",
            level : "Beginner",
            language : "Nodejs"
        },
    ]
    const additional = [
        {   
            id: "1",
            item : "Git"
        },
        {
            id : "2",
            item : "Teamwork",
        },
        {
            id : "3",
            item : "Graphics Design"
        },
        {
            id : "4",
            item : "Learning on the Job"
        },
        {
            id : "5",
            item : ""
        }
    ]
    return (
        <>
            <div id="projects">
     
                <h1 className="text-white text-5xl font-poppins text-left ml-10">Projects</h1>

                <div className="flex justify-center flex-wrap flex-[1]">
                    {
                        projectData.map((item => {
                            return (
                                <div key={item.id} className="my-4">
                                    <div className="md:ml-10  bg-slate-50 h-full md:w-[23rem] w-[18rem] p-4 rounded-tl-3xl rounded-br-3xl">
                                        <img src={item.projectImage} alt="" className="hov" />
                                        <h2 className="font-poppins uppercase p-5 text-[1.3rem] text-orange-700"> {item.projectTitle}</h2>
                                        <p className="font-poppins ">{item.projectDescription}</p>
                                        {/* <button className="bg-orange-600 text-primary font-poppins mr-auto flex m-3 rounded-full px-3 py-1"> Check it Out </button> */}
                                        <a className="d-flex flex-1 flex-end" href= {item.url}>
                                        <Button> Check it Out</Button>
                                        </a>
                                    </div>
                                </div>
                            )

                        }))
                    }
                </div>
                <section id="tech" className="transition-all ease-in duration-700">
                <div >
                    <h1 className="font-poppins text-white text-5xl text-left ml-10"> Technologies </h1>
                    
                    <div className="font-poppins ml-auto mr-auto my-5 md:w-1/2 w-[20rem] grid grid-cols-3 gap-4 flex-wrap">
                        {
                            Tech.map((item => {
                                return (
                        <label key={item.id}>
                            <div className="  justify-center text-center my-5 border p-2 border-[orange] rounded-[10px]">
                            <img src={item.img} alt="" className="rounded-full w-full" /> 
                              <p className="ml-auto text-white text-sm">{item.title}</p> 
                            </div>
                        </label>
                                )
                            }))
                        }
                    </div>
                </div>
                </section>
                <div>
                    <h1 className="text-white font-poppins text-xl md:text-center my-2 md:text-3xl text-left ml-10 ">Additional Technologies and Skills</h1>
                    <ul className="list-disc text-lg text-left ml-[4rem] md:ml-[20rem] text-white font-poppins">
                        
                    {
                        additional.map((item => {
                            return(
                                <li className="lg:ml-[20rem]" key={item.id}>{item.item}</li>
                            )
                        }))
                    }
                    </ul>
                </div>
                
            </div>
        </>
    );
}

export default Projects;