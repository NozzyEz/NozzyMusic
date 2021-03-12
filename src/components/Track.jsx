// styles
import '../scss/components/_track.scss';
import '../scss/components/_dark-mode.scss';

function Track({current, isPlaying, isDark}) {
  return (
    <div className={`song-container ${isDark ? 'dark-mode' : ''}`}>
      <img
        className={`song-cover ${isPlaying ? 'active' : ''}`}
        src={current.cover}
        alt="Album art"
      />
      <h1 className={`song-name ${isPlaying ? 'active' : ''}`}>{current.name}</h1>
      <h3 className={`song-author ${isPlaying ? 'active' : ''}`}>{current.author}</h3>
    </div>
  );
}

export default Track;
