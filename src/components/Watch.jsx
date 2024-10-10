import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Puff } from "react-loader-spinner"
import { addHistory, addWatchList } from "../store";
import { useDispatch } from "react-redux";

const Watch = () => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    const [video, setVideo] = useState([])

    const [allVideos, setAllVideos] = useState([])

    const { id } = useParams()

    async function getVideo() {

        setLoading(true)

        const response = await axios.get(`https://rac-api.vercel.app/watch/${id}`)

        const video = await response.data

        setLoading(false)

        setVideo([video])

    }

    async function getAllVideo() {
        const req = await fetch("https://rac-api.vercel.app/")
        const data = await req.json()

        setAllVideos(data)
    }

    useEffect(() => {
        getVideo()
    }, [id])

    useEffect(() => {
        getAllVideo()
    }, [])

    console.log(allVideos);

    return (
        <section className=" w-[90vw] py-[3vw] flex gap-[1vw] ">

            {loading && <div className=" absolute flex justify-center items-center w-[100vw] h-[100vh] bg-[#292929] top-0 left-0 z-[100] ">
                <Puff />
            </div>}

            {video && video.map((item) => (
                <aside key={item._id}>
                    <video autoPlay controls className=" w-[55vw] h-[34vw] rounded-[1vw] " src={item.video} />
                    <div className="flex items-center justify-between ">
                        <div>
                            <h1 className=" text-[2vw] font-bold mt-[2vw] ">{item.title}</h1>
                            <p className=" mt-[1vw] font-semibold text-[1vw] ">{item.description}</p>
                        </div>
                        <button onClick={() => dispatch(addWatchList({...item}))} className=" text-[2vw] mt-[2vw] fas fa-clock " />
                    </div>
                </aside>
            ))}

            <aside className=" flex flex-col gap-[1vw] ">
                {allVideos && allVideos.map((item) => (
                    <Link to={`/watch/${item._id}`} className='flex items-center justify-between px-[2vw] rounded-[1vw] font-semibold text-[1.3vw] w-[30vw]' key={item._id}>
                        <video onClick={() => dispatch(addHistory({video: item.video, title: item.title, id: item._id}))} className=" w-[12vw] h-[7vw] bg-[gray] rounded-[0.5vw] " src={item.video} />
                        <h3>{item.title}</h3>
                    </Link>
                ))}
            </aside>
        </section>
    )
};

export default Watch;
