import { useEffect, useState } from "react"
import { getGifs } from "../services";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: false
  });

  useEffect(() => {
    (async () => {
      setState({
        ...state,
        loading: true
      })
      const gifs = await getGifs(category)
      setState({
        data: gifs,
        loading: false
      })
    })()
  }, [category])

  return state
}