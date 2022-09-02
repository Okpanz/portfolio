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
        name: "Git",
        link: "https://github.com/Okpanz",
        avatar: "images/github.png",
        real : "Okpanz"
    }
]

const About = () => {
    console.log(handles)
    return (
        <>
            <div id="about">
                <h1 className="text-3xl font-poppins text-white  ml-10 my-5">About Me</h1>
                <p className="text-2sm font-poppins text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, iste. Odit blanditiis est quibusdam cumque <br /> tempora totam nisi facere quae, porro deleniti voluptates fuga modi sapiente ea asperiores illo vel!</p>
                <div className="flex flex-row justify-center my-20">
                    {
                        handles.map((item => {
                            return (
                                <div>
                                    <div className="flex items-center text-center mx-5">
                                    <img src={item.avatar} className="w-[2rem]" />
                                    <h1 className="text-white font-poppins mx-2 text-3xl text-left">
                                        {item.name} 
                                    </h1>
                                    </div>
                                    <p className="text-white font-poppins mx-2 text-3xl text-left">
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