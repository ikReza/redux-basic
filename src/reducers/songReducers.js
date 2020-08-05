const songListReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Barbie Girl", duration: "2:30" },
    { title: "All Star", duration: "3:05" },
    { title: "Backstreet Boys", duration: "5:25" },
  ];
};

const selectedSongReducer = (state = { selectedSong: null }, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

export { songListReducer, selectedSongReducer };
