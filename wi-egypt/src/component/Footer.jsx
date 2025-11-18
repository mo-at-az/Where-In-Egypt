import'./footer.css'
import abohol from'../assets/abohol.png'
import face from'../assets/facebook.png'
import insta from'../assets/instagram.png'
import tik from'../assets/tiktok.png'
function Footer() {

  return (
    <>
    <footer className="position-relative ">

<div className=" naho">
          <img className="ftr-img" src={abohol} alt=""/>
  <div className="ftr1 ">
    <p>Discover Egypt your way with our customized travel plans. From world famous landmarks to hidden gems, we help you create journeys that match your budget and interests. Start planning today and make your adventure unforgettable.</p>
  </div>
  <div className=" socialdiv">
    <h3>Follow us</h3>
    <div className="d-inline ">  
        <img src={face} alt="facebook" />
        <img src={insta} alt="instagram" />
        <img src={tik} alt="tik-tok" /> 
    </div>
  </div>
</div>
<hr className="ftrline"/>
<div className="naho">
  <div className="">
    <p> &copy; Copyright 2025 | where in egypt</p>
  </div>
  <div className=" text-center pe-4">
    <a href="#" className="d-inline me-5">ABOUT</a>
    <a href="#" className="d-inline">CONTACT</a>
  </div>
</div>
</footer>
    </>
  )
}

export default Footer