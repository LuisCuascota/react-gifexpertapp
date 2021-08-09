
export const getGifts = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=nzzdopHRwYdJqjUiwi2ndUVOjnp0zQ6E&q=${encodeURI(category)}&limit=5`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifts;
}