//import TrackList.css
import React from "react";
import Track from "../Track/Track";
import "./TrackList.css";

const TrackList = (props) => {
  const { tracks, onAdd, onRemove } = props

  // 
  return (
    <div className="TrackList">  
      {tracks.map((track) => {
        return <Track key={track.id} track={track} onRemove={onRemove} onAdd={onAdd} />})}
    </div>
  );
}
export default TrackList
