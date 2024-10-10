const TopMenu = ({ setShow, }) => {
    return (
        <nav
            className={`flex transition justify-between`}>
            <main className="flex gap-[2vw]">
                <button className=" fas fa-bars text-[2vw] " />
                <figure className="flex items-center gap-[1vw]">
                    <img className=" w-[3vw] " src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png" alt="Youtube" />
                    <figcaption className="font-bold text-[2vw]">Youtube</figcaption>
                </figure>
            </main>

            <form className="flex items-center justify-center ">
                <input className="outline-none text-[1.2vw] px-[2vw] h-[3.5vw] rounded-l-[3vw] w-[35vw] font-semibold " placeholder="Search videos" type="text" />
                <button className="fas fa-xmark relative right-[1.8vw] text-[2vw]" type="button" />
                <button type="submit" className=" text-[1.5vw] fa-solid w-[5vw] h-[3.5vw] rounded-r-[3vw] relative right-[1.5vw] bg-[#333333] fa-magnifying-glass " />
            </form>

            <figure className="flex items-center gap-[3vw] text-[1.7vw] ">
                <figcaption onClick={() => setShow(true)} className="cursor-pointer fa-solid fa-video" />
                <figcaption className="cursor-pointer fas fa-bell" />
            </figure>
        </nav>
    )
}

export default TopMenu
