import Album from './album-card.jsx'

import {albums} from '../utils.js'

function AlbumSection() {
  return(
    <section>
    <h2>Album</h2>
    <div className="albums"></div>
    {albums.map(({id, title, artist,year, image})=>
    <Album key={id} title={title} artist={artist} year={year} image={image}></Album>
    )}
    </section>
  )
} 

export default AlbumSection