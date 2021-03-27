//React imports
import {useEffect, useState, useRef} from 'react';
// styles
import './scss/App.scss';

//music
import data from './data';

// Components
import Playlist from './components/Playlist';
import Player from './components/Player';
import Track from './components/Track';
import Nav from './components/Nav';

// main app
function App() {
  const audioRef = useRef(null);

  // Check if on mobile
  const mql = window.matchMedia('(max-width: 500px');
  let mobileView = mql.matches;

  // state
  const [isDark, setDark] = useState(false);
  const [tracks] = useState(data());
  const [current, setCurrent] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRepeatOne, setRepeatOne] = useState(false);
  const [hasRepeatAll, setRepeatAll] = useState(false);
  const [hasShuffle, setShuffle] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  //* Effect that makes sure the correct track is marked as active when a track is changed
  useEffect(() => {
    tracks.map(state => (state === current ? (state.active = true) : (state.active = false)));
  }, [current, tracks]); // We can pass it dependencies so it only runs when those states are changed

  //* This specifically triggers when music is playing, then sets the songInfo accordingly
  //* so we can show time
  function timeUpdateHandler(e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const percentage = (currentTime / duration) * 100;

    setSongInfo({...songInfo, currentTime: currentTime, duration, animationPercentage: percentage});
  }

  function playlistCloseHandler() {
    if (isPlaylistOpen && mobileView) setIsPlaylistOpen(!isPlaylistOpen);
  }

  //* handler for when a track is ended, here it checks if user has repeat one, all or none selected and behaves accordingly
  async function trackEndHandler() {
    let currentIndex = tracks.findIndex(state => state.id === current.id);

    if (hasRepeatOne) {
      // console.log('repeat one ran');
      audioRef.current.currentTime = 0;
    } else if (hasRepeatAll) {
      // console.log('repeat all ran');
      await setCurrent(tracks[(currentIndex + 1) % tracks.length]);
    } else {
      // console.log('repeat none ran');
      if (current.id === tracks[tracks.length - 1].id) {
        // console.log('last track detected');
        await setIsPlaying(false);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        return;
      } else {
        await setCurrent(tracks[(currentIndex + 1) % tracks.length]);
      }
    }
    if (hasShuffle && !hasRepeatOne) {
      const nextIndex = Math.round(Math.random() * 100) % tracks.length;
      await setCurrent(tracks[nextIndex]);
    }
    audioRef.current.play();
  }

  // render
  return (
    <div className="App">
      <div className="app-container" onClick={playlistCloseHandler}>
        <Nav
          isPlaylistOpen={isPlaylistOpen}
          setIsPlaylistOpen={setIsPlaylistOpen}
          isDark={isDark}
          setDark={setDark}
        />
        <Track current={current} isPlaying={isPlaying} isDark={isDark} />
        <Player
          audioRef={audioRef}
          isDark={isDark}
          current={current}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          hasRepeatOne={hasRepeatOne}
          setRepeatOne={setRepeatOne}
          hasRepeatAll={hasRepeatAll}
          setRepeatAll={setRepeatAll}
          hasShuffle={hasShuffle}
          setShuffle={setShuffle}
          setCurrent={setCurrent}
          tracks={tracks}
        />
        <footer className={`${isDark ? 'dark-mode' : ''}`}>
          <h4>Created by: Mark Sahlgreen &copy; 2021</h4>
          <div className="credit">
            <h4>Music imported from</h4>
            <a href="https://chillhop.com/" target="_blank" rel="noreferrer">
              <img
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/Chillhop_white.svg"
                alt="ChillHop Logo"
              />
            </a>
          </div>
        </footer>
      </div>
      <Playlist
        tracks={tracks}
        setCurrent={setCurrent}
        audioRef={audioRef}
        isPlaying={isPlaying}
        isPlaylistOpen={isPlaylistOpen}
        isDark={isDark}
      />
      <audio
        ref={audioRef}
        src={current.audio}
        onLoadedMetadata={timeUpdateHandler} //Update times initially when player is rendered
        onTimeUpdate={timeUpdateHandler} // update times when music is being player
        onEnded={trackEndHandler}
      ></audio>
    </div>
  );
}

export default App;
