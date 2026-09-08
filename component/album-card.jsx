function Album({image, name, artist, year}){
    return(
     <div>
       <img src={image}/>
       <h3>{name}</h3>
       <p>{artist} • {year}</p>
     </div>
    ) 

}

export default Album