const ArtistCard= ({image, artist})=> {
  return <div className="artist">
  <img src={image} />
  <p> {artist}</p>
  </div>
 
}

export default ArtistCard