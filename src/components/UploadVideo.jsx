import { useState } from "react"

const UploadVideo = ({ show, setShow }) => {

    const [video, setVideo] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [desc, setDesc] = useState("")

    function videoUrl(video) {
        const reader = new FileReader()

        reader.readAsDataURL(video)

        const data = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result)
            reader.onerror = () => reject()
        })

        return data
    }

    async function getData(e) {

        const video = e.target.files[0]

        if (!video) {
            console.log("Bu yerda fayl yo'q");
        }

        const videoFile = await videoUrl(video)

        return setVideo(videoFile)

    }

    async function postData() {
        const req = await fetch("https://rac-api.vercel.app/videos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                video,
                category,
                title,
                description: desc
            })
        })

        await req.json()
    }

    return (
        <div className={`w-[100vw] h-[100vh] p-[2vw] duration-[0.7s] transition absolute top-0 left-0 bg-[#242424] ${show ? "scale-1" : "scale-0"}`}>
            <div className="flex items-center justify-between ">
                <h1 className=" text-[2vw] font-bold ">Upload new Video</h1>
                <button onClick={() => setShow(false)} className=" text-[2vw] p-[1vw] bg-[blue] rounded-[0.5vw] cursor-pointer fas fa-xmark " />
            </div>

            <form onSubmit={postData} className="mt-[3vw]">

                <label className="flex gap-[3vw] items-center " htmlFor="upload">
                    <i className="fas rounded-[1vw] shadow-2xl px-[8vw] py-[4vw] bg-[#4b4a4a85] fa-cloud-arrow-down text-[5vw] " />
                    {video.length !== 0 && <video className="w-[25vw] h-[14vw] " controls src={video} />}

                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-[40vw] h-[15vw] p-[2vw] font-semibold outline-none text-[1vw] " placeholder="Enter description for this video " />
                    <input onChange={getData} accept="video/*" id="upload" type="file" className="hidden" />
                </label>

                <aside className=" flex justify-between mt-[3vw] ">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter video title" className=" font-semibold text-[1.3vw] w-[45vw] outline-none px-[2vw] h-[4vw] " />
                    <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter video category" className=" font-semibold text-[1.3vw] w-[45vw] outline-none px-[2vw] h-[4vw] " />
                </aside>
                <button className=" w-[100%] hover:bg-[darkblue] h-[5vw] text-[1.4vw] font-semibold mt-[2vw] bg-[blue] ">Upload video</button>
            </form>
        </div>
    )
}

export default UploadVideo
