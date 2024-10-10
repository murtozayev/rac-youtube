import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { clearHistory } from "../store";

const History = () => {

    const history = useSelector(state => state.history)

    const dispatch = useDispatch()

    function handleConfig() {
        dispatch(clearHistory())
        window.location.reload()
    }

    return (
        <div className=" w-[90vw] p-[1vw] ">
            <h1 className=" text-[2.5vw] font-bold uppercase ">History</h1>
            {history.map((item) => {
                return (
                    <table key={item._id}>
                        <tbody>

                            <tr className="hover:bg-[#424242] flex justify-between rounded-[1vw] items-center w-[80vw] ">
                                <td>
                                    <Link to={`/watch/${item.id}`}>
                                        <video className=" m-[2vw] w-[35vw] h-[20vw] bg-[#32313194] " src={item.video} />
                                    </Link>
                                </td>
                                <td>
                                    <h1 className=" font-semibold text-[2vw] mx-[3vw] ">{item.title}</h1>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}

            <button onClick={handleConfig} className=" m-[3vw] float-end px-[2vw] py-[0.5vw] bg-[red] rounded-[0.5vw] font-semibold ">Clear history</button>
        </div >
    )
}

export default History
