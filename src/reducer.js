function songReducer(state, action) {
  switch (action.type) {
    case "PLAY_SONG": {
      return {
        ...state,
        isPlaying: true,
      };
    }
    case "PAUSE_SONG": {
      return {
        ...state,
        isPlaying: false,
      };
    }
    default:
      break;
  }
}

export default songReducer;
