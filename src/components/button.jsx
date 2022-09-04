

const Button = (props) => {
    return(
        <>
        <button className="text-black bg-stone-200 px-5 py-2 rounded-3xl hover:bg-orange-500 transition-all ease-in duration-500 hover:text-white font-poppins ">
            {props.children}
            </button>
        </>
    )
};
export default Button;