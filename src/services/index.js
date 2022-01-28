export const getGifs = async (category) => {
  const apiKey = "QlmGHgdfgpDDCyTa3h8XHAluEGOzJpt9"
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`
  const response = await window.fetch(url)
  const { data } = await response.json()

  const gifs = data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url
  }))

  return gifs
}