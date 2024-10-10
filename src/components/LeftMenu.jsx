import { NavLink } from "react-router-dom"

const LeftMenu = () => {
    return (
        <section className=" flex flex-col gap-[1vw] w-[7vw] items-center relative right-[2vw] ">
            <NavLink to="/" className=" w-[5vw] h-[6vw] hover:bg-[#1616168b] flex justify-center items-center rounded-[1vw] ">
                <figure className=" flex flex-col items-center gap-[0.2vw] ">
                    <figcaption className=" text-[2vw] fa-solid fa-house " />
                    <figcaption className="text-[1vw] font-semibold">Home</figcaption>
                </figure>
            </NavLink>
            <NavLink to="/saved" className=" w-[5vw] h-[6vw] hover:bg-[#1616168b] flex justify-center items-center rounded-[1vw] ">
                <figure className=" flex flex-col items-center gap-[0.2vw] ">
                    <figcaption className=" fa-solid text-[2vw] fa-clock " />
                    <figcaption className="text-[1vw] font-semibold">Watch List</figcaption>
                </figure>
            </NavLink>
            <NavLink to="/history" className=" w-[5vw] h-[6vw] hover:bg-[#1616168b] flex justify-center items-center rounded-[1vw] ">
                <figure className=" flex flex-col items-center gap-[0.2vw] ">
                    <figcaption className=" fa-solid text-[2vw] fa-clock-rotate-left " />
                    <figcaption className="text-[1vw] font-semibold">History</figcaption>
                </figure>
            </NavLink>
            <NavLink to="/settings" className=" w-[5vw] h-[6vw] hover:bg-[#1616168b] flex justify-center items-center rounded-[1vw] ">
                <figure className=" flex flex-col items-center gap-[0.2vw] ">
                    <figcaption className=" fa-solid text-[2vw] fa-gear " />
                    <figcaption className="text-[1vw] font-semibold">Settings</figcaption>
                </figure>
            </NavLink>
        </section>
    )
}

export default LeftMenu
