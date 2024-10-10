import { useDispatch } from "react-redux"
import useData from "../hooks/useData"
import VideoCard from "./VideoCard"
import { Hourglass } from "react-loader-spinner"
import { addHistory, addWatchList } from "../store"

const MainScreen = () => {

    const { data, loading } = useData("https://rac-api.vercel.app/")

    const dispatch = useDispatch()

    return (
        <header className="h-[80vh] w-[90vw]">
            {loading && (
                <div className="flex items-center justify-center h-[80vh]">
                    <Hourglass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#306cce', '#72a1ed']}
                    />
                </div>
            )}
            <section className=" flex flex-wrap gap-[2vw] justify-between ">
                {data && data.map((item) => (
                    <VideoCard
                        addWatch={() => dispatch(addWatchList({...item}))}
                        onClick={() => dispatch(addHistory({ video: item.video, title: item.title, id: item._id }))}
                        to={`watch/${item._id}`}
                        key={item._id} src={item.video}
                        title={item.title}
                        channel={item.category}
                    />
                ))}
            </section>
        </header>
    )
}

export default MainScreen
