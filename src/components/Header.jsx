import LandingPage from "../pages/LandingPage";

const Header = () => {
    const navItem = [
        {
            id: "1",
            item: "Projects"
        },
        {
            id: "2",
            item: "Technologies"
        },
        {
            id: "3",
            item: "About me"
        }

    ]
    return (
        <>
            <div className="">
                {/* <div className="brand flex  ml-10 ">
                </div> */}
                <div className="flex  p-10 ">
                    <h1 className="text-[#fff] font-poppins text-2xl">Okpanachi</h1>
                    <ul className="flex w-1/2 mx-auto justify-evenly font-poppins " >
                    {
                        navItem.map(nav => (

                                <li className="text-white text-2xl" key={nav.id}>{nav.item}</li>
                                ))
                            }
                            </ul>
                    <div>
                        <p className="text-white font-poppins">Icons</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;