import { useSelector } from "react-redux"

const WatchList = () => {

    const watchList = useSelector((state) => state.watchList)

    return (
        <div className=" w-[90vw] p-[1vw] flex items-start gap-[5vw] ">
            <section className=" w-[27vw] flex flex-col items-center rounded-[1vw] py-[1vw] h-[35vw] bg-[#00008b51] ">
                <video className=" w-[25vw] h-[15vw] bg-[#282828] rounded-[1vw] " src={watchList[0].video} />
                <h2 className=" text-[2vw] font-bold mt-[1vw] ">{watchList[0].title}</h2>
                <button className=" bg-[red] px-[2.5vw] py-[1vw] text-[1.3vw] font-bold rounded-[2vw] flex items-center gap-[2vw] mt-[3vw] active:bg-[darkred] ">
                    <span>Play video</span>
                    <i className=" fas fa-play" />
                </button>
            </section>

            <div className="p-[1vw] bg-[#8080801f] " >
                {watchList && watchList.map((item) => (
                    <div key={item._id} className="flex items-center gap-[2vw] hover:bg-[#3b3a3a] cursor-pointer bg-[#292828] " >
                        <video className="w-[20vw] h-[10vw] bg-[#00008b40] " src={item.video} />
                        <div>
                            <h2 className="text-[2vw] font-bold ">{item.title}</h2>
                            <p className="font-semibold ">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WatchList
