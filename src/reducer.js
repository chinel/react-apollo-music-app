function songReducer(state, action) {
  switch (action.type) {
    case "PLAY_SONG": {
      return {
        ...state,
        isPlaying: true,
      };
    }
    default:
      break;
  }
}

export default songReducer;
