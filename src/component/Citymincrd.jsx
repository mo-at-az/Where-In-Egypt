function Citymincrd({name,image,description}) {
  return (
    <>
            <article className="city-places  ms-5"> 
              <img src={image} alt={name}/>
              <h2>{name}</h2>
              <h4 class="fs-5">{description}</h4>
            </article>
    </>
  )
}

export default Citymincrd
