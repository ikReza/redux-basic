import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../actions/songActions";

const SongList = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  return songs.map((song, i) => (
    <div key={i}>
      <p>{song.title}</p>
      <button onClick={() => dispatch(selectSong(song))}>Select</button>
    </div>
  ));
};

export default SongList;
