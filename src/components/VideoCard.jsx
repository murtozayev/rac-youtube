import { useState } from "react"
import { Link } from "react-router-dom"

const VideoCard = ({ src, title, channel, to, onClick, addWatch }) => {

    const [show, setShow] = useState(false)

    return (
        <figure className="w-[25vw]">
            <Link to={to}>
                <video onClick={onClick} src={src} className={` w-[25vw] shadow-2xl  rounded-[1vw] h-[14vw] `} />
            </Link>
            <div className="flex justify-between relative mt-[1vw]">
                <h1 className=" font-bold text-[2vw] ">{title}</h1>
                <button onClick={() => setShow(prev => !prev)} className="fa-solid text-[1.5vw] fa-ellipsis-vertical" />

                <div className={` w-[15vw] ${show ? "flex" : "hidden"} transition justify-center items-center p-[1vw] absolute h-[6vw] rounded-[1vw] right-[1vw] bg-[#464646] `}>
                    <figure onClick={addWatch} className="flex items-center gap-[1vw] hover:bg-[gray] cursor-pointer font-bold">
                        <figcaption className="fas fa-clock text-[1.5vw]" />
                        <span className=" text-[1.2vw] ">Save to watch List</span>
                    </figure>
                </div>

            </div>
            <p className="mt-[0.4vw] font-semibold text-[1vw]">{channel}</p>
        </figure>
    )
}

export default VideoCard
