function Album({image, name, artist, year}){
    return(
     <div className="album">
       <img src={image}/>
       <h3>{name}</h3>
       <p>{artist} • {year}</p>
     </div>
    ) 

}

export default Album