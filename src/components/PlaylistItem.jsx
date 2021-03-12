import '../scss/components/_dark-mode.scss';

function PlaylistItem({track, tracks, audioRef, setCurrent, isPlaying, isDark}) {
  //* change current track based on which one is clicked
  async function setCurrentHandler(e) {
    await setCurrent(track);
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }
  return (
    <div
      className={`track-container ${track.active ? 'selected' : ''} ${isDark ? 'dark-mode' : ''}`}
      onClick={setCurrentHandler}
    >
      <img className="track-thumbnail" src={track.cover} alt="Album art" />
      <div className="track-details">
        <h4 className="track-name">{track.name}</h4>
        <p className="track-author">{track.author}</p>
      </div>
    </div>
  );
}

export default PlaylistItem;
