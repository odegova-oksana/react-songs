import { ReactReduxContext } from "react-redux";
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '5:05' },
        { title: 'No limits', duration: '3:45' },
        { title: 'I want it my way', duration: '6:05' }
    ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
      }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

