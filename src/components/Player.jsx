import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faStop,
  faStepBackward,
  faStepForward,
  faRetweet,
  faRandom,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  audioRef,
  current,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
  hasRepeatOne,
  setRepeatOne,
  hasRepeatAll,
  setRepeatAll,
  hasShuffle,
  setShuffle,
  setCurrent,
  tracks,
  isDark,
}) => {
  const [repeatVal, setRepeatVal] = useState('NONE');
  const [shuffleVal, setShuffleVal] = useState('OFF');

  // Event handlers
  //* updates the audio playback based on which value is set in the slider
  function sliderHandler(e) {
    const newTime = e.target.value;
    setSongInfo({...songInfo, currentTime: newTime});
    audioRef.current.currentTime = newTime;
  }

  //* Checks to see if music is playing, and either pauses or plays music depending on it
  function playBtnHandler() {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  }
  //* Stops music and resets the time to the beginning of the music being played
  function stopBtnHandler() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  }
  //* changes track based on which button has been pressed
  async function changeTrackHandler(direction) {
    let currentIndex = tracks.findIndex(state => state.id === current.id);
    // Checks if the index goes to -1 and plays the last track in the playlist then
    if (direction === 'previous') {
      (currentIndex - 1) % tracks.length === -1
        ? await setCurrent(tracks[tracks.length - 1])
        : await setCurrent(tracks[(currentIndex - 1) % tracks.length]);
    } else {
      // Plays the next track, or the first, if the index gets out of bounds
      await setCurrent(tracks[(currentIndex + 1) % tracks.length]);
    }
    if (isPlaying) audioRef.current.play();
  }

  //* handles repeat functionality on button press
  function repeatBtnHandler() {
    if (!hasRepeatOne && !hasRepeatAll) {
      setRepeatOne(true);
      setRepeatVal('ONE');
    } else if (hasRepeatOne) {
      setRepeatOne(false);
      setRepeatAll(true);
      setRepeatVal('ALL');
    } else {
      setRepeatAll(false);
      setRepeatVal('NONE');
    }
  }

  //* handles if shuffle should be turned on based on user input
  function shuffleBtnHandler() {
    if (!hasShuffle) {
      setShuffleVal('ON');
      setShuffle(true);
    } else {
      setShuffleVal('OFF');
      setShuffle(false);
    }
    return;
  }

  //* take input time in seconds and converts it to a minutes and seconds string for presentation
  //* or if time is falsey set it to 0:00
  const formatTime = time =>
    time ? Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2) : '0:00';

  //* style for the track
  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const trackStyle = {
    background: `linear-gradient(to right, ${current.colors[0]}, ${current.colors[1]})`,
  };

  return (
    <div className={`player ${isDark ? 'dark-mode' : ''}`}>
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div style={trackStyle} className="track">
          <input
            type="range"
            name="time-slider"
            id="time-slider"
            min={0}
            value={Math.floor(songInfo.currentTime)}
            max={songInfo.duration || 0}
            onChange={sliderHandler}
          />
          <div style={trackAnimation} className="animate-track"></div>
        </div>
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <span className="shuffle-info">Shuffle {shuffleVal}</span>
        <div className="play-btns">
          <FontAwesomeIcon
            onClick={shuffleBtnHandler}
            className="shuffle-btn"
            icon={faRandom}
            size="3x"
          />
          <FontAwesomeIcon
            onClick={() => changeTrackHandler('previous')}
            className="previous-btn"
            icon={faStepBackward}
            size="3x"
          />
          {/* setting either a play or a pause button depending if music is being played */}
          <FontAwesomeIcon
            onClick={playBtnHandler}
            className="play-btn"
            icon={!isPlaying ? faPlay : faPause}
            size="3x"
          />
          <FontAwesomeIcon onClick={stopBtnHandler} className="stop-btn" icon={faStop} size="3x" />
          <FontAwesomeIcon
            onClick={() => changeTrackHandler('next')}
            className="next-btn"
            icon={faStepForward}
            size="3x"
          />
          <FontAwesomeIcon onClick={repeatBtnHandler} icon={faRetweet} size="3x" />
        </div>
        <span className="repeat-info">Repeat {repeatVal}</span>
      </div>
    </div>
  );
};

export default Player;
