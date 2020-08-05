// const selectSong = (song) => {
//   return {
//     type: "SONG_SELECTED",
//     payload: song,
//   };
// };

const selectSong = (song) => (dispatch) => {
  dispatch({
    type: "SONG_SELECTED",
    payload: song,
  });
};

export { selectSong };
