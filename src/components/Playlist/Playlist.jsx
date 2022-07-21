//import Playlist.css
import React from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

const Playlist = (props) => {
  const { tracks, onRemove, onNameChange, onSave, playlistName } =props

  const handleNameChange = (event) => {
    onNameChange(event.target.value)
  }



  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange}/>
      <TrackList tracks={tracks} onRemove= {onRemove}/>
      <button className="Playlist-save" onClick= {onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist