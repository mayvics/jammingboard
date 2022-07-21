//import Track.css
import React from "react"
import "./Track.css"

const Track = (props) => {
  const { track:{name}, track:{artist}, track:{album}, track:{id},  onAdd, onRemove  } = props
  const addTrack = () => {
    props.onAdd(props.track)
  }
  const removeTrack = () => {
    props.onRemove(props.track)
  }

  const renderAction = () => {
    if(onAdd){
      return <button className="Track-action" onClick= {addTrack}> + </button>
      } else {
      return <button className="Track-action" onClick= {removeTrack}> - </button>
      }
  }
  
  return (
    <div className="Track">
      <div className="Track-information">
        <h3> {name}</h3>
        <p> {artist} | {album}</p>
      </div>
      {renderAction()}
    </div>
  )
}

export default Track