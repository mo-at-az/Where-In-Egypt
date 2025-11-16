import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Nav from './Nav'
import Footer from './Footer'
import Center from './Center'
import alex1 from'../assets/alex1.png'
import alex2 from'../assets/alex2.png'
import alex3 from'../assets/alex3.png'
import pyr from'../assets/pyr.png'
import abosmpl from'../assets/abosmpl.png'
import gem from'../assets/gem.jpg'
import tahmes from'../assets/tahmes.jpg'
import slaheldin from'../assets/slaheldin.jpeg'


 const allcities = [
  {"id":1,"name":"Qaitbay Citadel","description":"Located on the Mediterranean coast of Alexandria, Qaitbay Citadel is one of Egypt’s most iconic landmarks.","image":alex1,"city":"ALEXANDRIA"},
  
  {"id":2,"name":"Library of Alexandria","description":"Library of Alexandria is a major library and cultural center on the shore of the Mediterranean Sea in Alexandria, Egypt.","image":alex2,"city":"ALEXANDRIA"},
  
  {"id":3,"name":"Roman museum","description":"Graeco-Roman Museum showcases a rich collection of artifacts from Egypt’s Greco-Roman period. Established in 1892","image":alex3,"city":"ALEXANDRIA"},
  
  {"id":4,"name":"slaheldin Citadel","description":"loremasdansjkdansd","image":slaheldin,"city":"CAIRO"},
  
  {"id":5,"name":"tahmes","description":"sgjkdhdsfjkghjkdfghkjdfhgkjdhfgjsdlkjhgklsdjfhgkldfg","image":tahmes,"city":"CAIRO"},
  
  {"id":6,"name":"gem","description":"loremdfjhskjdfhnjksbahgjfdsbnfdmgbsdjkfghsdjskjuhyrgusrhgusdrhglurhgdkfjghnkjdfgg","image":gem,"city":"CAIRO"}
]


const trndy=[
  {"id":1,"name":"The Pyramids","description":"Standing on the edge of Cairo, the Pyramids of Giza are the last surviving wonder of the ancient world. Built over 4,500 years ago as royal tombs, they remain a symbol of Egypt’s timeless history and architectural genius. Visitors can explore the Great Pyramid of Khufu, the Pyramid of Khafre, the Pyramid of Menkaure, and the legendary Sphinx guarding the plateau.","image":pyr},
  
    {"id":2,"name":"Abu Simbel Temples","description":"Carved into the cliffs of southern Egypt, the Abu Simbel Temples were built by Pharaoh Ramses II over 3,000 years ago. Famous for their colossal statues and stunning interiors, the temples are aligned so that twice a year the sun illuminates the inner sanctuary a a timeless masterpiece of ancient design.","image":abosmpl},
    
  ]
  
  
  function App() {
  const [cities,setcity]=useState(allcities)

  const [homecity, sethomecity] = useState("ALEXANDRIA");

useEffect( ()=>{  
  let filteredcity= allcities.filter(gov=>{
    return gov.city==homecity
  })

  setcity(filteredcity);

},[homecity] )


  return (
    <>
    <Nav></Nav>

    <Center places={cities} trndy={trndy} changemaincity={sethomecity} > </Center>

    <Footer></Footer>
    </>
  )
}

export default App
