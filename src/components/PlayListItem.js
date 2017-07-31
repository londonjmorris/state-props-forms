import React, { Component } from 'react';

export default function PlayListItem(props) {
  return (
    <div className="card bg-primary">
      <li className="list-group-item bg-primary">Artist: { props.song.songArtist }</li>
      <li className="list-group-item text-primary">Song: { props.song.songTitle }</li>
      <li className="list-group-item bg-primary">Notes: { props.song.songNotes }</li>
      <li className="list-group-item text-primary">User: { props.song.userName }</li>
    </div>
  )
}
