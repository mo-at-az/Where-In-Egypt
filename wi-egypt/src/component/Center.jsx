import'./center.css'
import unnamed from'../assets/unnamed 1.png'
import rm1 from'../assets/rm1 1.png'
import sh1 from'../assets/sh1 1.png'
import rghtarr from'../assets/rigt-arrow.png'
import lftarr from'../assets/left-arrow.png'
import alex1 from'../assets/alex1.png'
import alex2 from'../assets/alex2.png'
import alex3 from'../assets/alex3.png'
import ar3 from'../assets/ar 3.png'
import pyr from'../assets/pyr.png'
import brwaz from'../assets/brwaz.png'
import abosmpl from'../assets/abosmpl.png'
import Citymincrd from './Citymincrd'
import Button from './button'
import Trendcrd from './trendcrd'

function Center({places,trndy,changemaincity}) {

  return (
    <>
    
<main>
      <div className="main-section container-fluid row ">
        <div className="col-7 stsec ">
          <h1 className="">Discover the Treasures of Egypt,</h1>
          <p className="dat mb-0">Tell us your budget and interests,</p>
          <p>and we'll find the perfect destinations for your adventure.</p>
         <section>
           <div className="nxtbtn">
            <Button content={"click here"} ></Button>
            </div>
            <div className="nxtbtn">
              <span>No More Generic Tours  </span>
              <br/>
              <span>Design Your Own Experience Today</span>
            </div>
          </section>
          </div>
           <img src={unnamed} className="col-5 sdimg"  alt=""/>   
      </div>
      <div className="waterboat mt-5">
        <img src={rm1} width="100%" alt=""/>
        <img src={sh1} className="ship" alt=""/>
      </div>

      <div className="main-body">
            <a href="#"><img src={lftarr}  className="arrow" alt=""/></a>
            <div className="nxtbtn">
            <Button content={"CAIRO"} change={changemaincity} ></Button>
            </div>
             <div className="nxtbtn">
                <Button content={"GIZA"} change={changemaincity}></Button>
            </div>
             <div className="nxtbtn">
                <Button content={"ALEXANDRIA"}change={changemaincity} ></Button>
            </div>
             <div className="nxtbtn">
                <Button content={"ASWAN"} change={changemaincity}></Button>
            </div>
             <div className="nxtbtn">
                <Button content={"LUXOR"} change={changemaincity} ></Button>
            </div>
            <a href="#"><img src={rghtarr} className="arrow" alt=""/></a>     
      </div>
      <hr className="thick-line"/>
      <div className="container-fluid d-flex justify-content-between artdata">

{/*         <div>
            <article className="city-places  ms-5"> 
              <img src={allcities.image} alt=""/>
              <h2>{allcities.name}</h2>
              <h4>{allcities.description}</h4>
            </article>
            <article className="city-places "> 
              <img src={alex2} alt=""/>
              <h2>Library of Alexandria</h2>
              <h4>Library of Alexandria is a major library and cultural center on the shore of the Mediterranean Sea in Alexandria, Egypt.</h4>
            </article>
            <article className="city-places "> 
              <img src={alex3} alt=""/>
              <h2>Roman museum</h2>         
              <h4>Graeco-Roman Museum showcases a rich collection of artifacts from Egypt’s Greco-Roman period. Established in 1892</h4>
            </article>
             </div>
        */}
        {
                    places.map(city => {
                        return (
                                   <Citymincrd 
                                   name={city.name} 
                                   image={city.image}
                                   description={city.description} />
                        )
                    })
                }
      </div>
      <hr/>
      <div className="tpdiv ">
        <img src={ar3} className="ar3" alt=""/> 
        <h1 className="top">Top Trending Places in Egypt</h1>
      </div>


    {/* <!-- <div className="widecard container-fluid   "> --> */}
      {/* <div className="crd col-8 row stcrd mb-5 ">
        <img src={pyr} className="col-6" alt=""/>
        <div className="col-6 text-center">
          <p className="crd-data">Standing on the edge of Cairo, the Pyramids of Giza are the last surviving wonder of the ancient world. Built over 4,500 years ago as royal tombs, they remain a symbol of Egypt’s timeless history and architectural genius. Visitors can explore the Great Pyramid of Khufu, the Pyramid of Khafre, the Pyramid of Menkaure, and the legendary Sphinx guarding the plateau.</p>
          <h3 className="z-3 position-relative he">The pyramids</h3>
          <img src={brwaz} className="brwz z-1" alt=""/>
        </div>
      </div> */}

                 {
                    trndy.map(trnd => {
                        return (
                                   <Trendcrd 
                                   name={trnd.name} 
                                   image={trnd.image}
                                   description={trnd.description} />
                                )
                            })
                        }


      {/* <div className="crd ndcrd col-8 row">
        <img src={abosmpl}  className="col-6" alt=""/>
        <div className="col-6 text-center">
          <p className="crd-data">Carved into the cliffs of southern Egypt, the Abu Simbel Temples were built by Pharaoh Ramses II over 3,000 years ago. Famous for their colossal statues and stunning interiors, the temples are aligned so that twice a year the sun illuminates the inner sanctuary a a timeless masterpiece of ancient design.</p>
          <h3 className="z-3 position-relative  he2">Abu Simbel Temples</h3>
          <img src={brwaz} className="brwz b2 z-0" alt=""/>
        </div>
      </div> */}
    {/* <!-- </div> --> */}
    </main>





    </>
  )
}

export default Center
