const handles = [
    {
        id: "1",
        name: "Call Me",
        link: "tel:+2348164482158",
        avatar: "images/telephone-call.png",
        real: "+234 8164 488 2158"
    },
    {
        id: "2",
        name: "Email",
        link: "mailto: okpanz700@gmail.com",
        avatar: "images/gmail.png",
        real: "okpanz700@gmail.com"
    },
    {
        id: "3",
        name: "GitHub",
        link: "https://github.com/Okpanz",
        avatar: "images/github.png",
        real: "Okpanz"
    }
]

const About = () => {
    console.log(handles)
    return (
        <>
            <div id="about">
                <h1 className="text-3xl font-poppins text-white w-2/3 md:w-1/2 ml-auto mr-auto my-5">About Me</h1>
                <p className="text-sm md:text-2xl font-poppins w-[22rem] md:w-1/2 ml-auto mr-auto text-white">My Name is Okpanachi Emmanuel, A Frontend web Developer and Graphics Designer Skilled in JavaScript and CorelDraw 
                with loads of Exprience gathered over time can undertake any Project, work with team and be a useful member in an organization as well as in a team
                <br /> </p>
                <div className="flex flex-col md:flex-row justify-center my-20">
                    {
                        handles.map((item => {
                            return (
                                <div className="my-3">
                                    <div className="flex items-center justify-center text-center mx-5">
                                        <img src={item.avatar} className=" md:w-[2rem] w-[1rem]" />
                                        <h1 className="text-white md:block text-sm text-center font-poppins mx-2 md:text-3xl text-">
                                            {item.name}
                                        </h1>
                                    </div>
                                    <p className="text-white text-[1.5rem] my-1 text-sm flex font-poppins justify-center mx-2 md:text-3xl md:text-left">
                                        <a href={item.link}>   {item.real}</a>

                                    </p>
                                </div>
                            )
                        }))
                    }

                </div>
            </div>
        </>
    );
}

export default About;
