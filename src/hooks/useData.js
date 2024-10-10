import { useEffect, useState } from "react"
import axios from "axios"

const useData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  async function getData() {
    setLoading(true)
    const req = await axios.get(url)

    const res = await req.data
    setLoading(false)
    return setData(res)
  }

  useEffect(() => {
    getData()
  }, [url])

  return { loading, data }
}

export default useData
