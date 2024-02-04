const apiKey = "0Vh0we2uE0wOTcWoi4NyIxPh8myKCamc"



// get the giph

const getGiph = async () => {

  // url for randomized giph and add my APiKey
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`
  console.log(url)

  const response = await fetch (url)

  const data = await response.json()

  console.log(data.data.url)
}

getGiph()