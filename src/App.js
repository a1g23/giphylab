
import './App.css';
import Button from './components/button';
import Giph from './components/giph';
import Main from './components/main';
import { useState, useEffect } from "react"

function App() {
// // declare API Key
const apiKey = "0Vh0we2uE0wOTcWoi4NyIxPh8myKCamc"

// // initialize state

const [giph, setGiph] = useState("")

// get the giph url

const getGiph = async () => {

  // url for randomized giph and add my APiKey
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`
  

  const response = await fetch (url)

  const data = await response.json()

  //create the new giph url by drilling into the url of the object

  const fixedheightGiph = data.data.images.fixed_height.url
  console.log(fixedheightGiph)
  

  //update the 
  setGiph(fixedheightGiph)
}
//render a random gif url to start.. 
useEffect(() => {
  getGiph()
}, [])

console.log(giph)

  return (
    <div className="App"> 
      


      <Main />
      <Button giphButton={getGiph}/>
      <Giph giph={giph}/>
    </div>
  );
}

export default App
