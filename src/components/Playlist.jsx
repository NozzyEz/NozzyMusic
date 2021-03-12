import PlaylistItem from './PlaylistItem';

import '../scss/components/_playlist.scss';
import '../scss/components/_dark-mode.scss';

function Playlist({tracks, setCurrent, audioRef, isPlaying, isPlaylistOpen, isDark}) {
  return (
    <div className={`playlist ${isPlaylistOpen ? 'active' : ''} ${isDark ? 'dark-mode' : ''}`}>
      <h3>Playlist</h3>
      <div className="playlist-container">
        {tracks.map(track => (
          <PlaylistItem
            track={track}
            isDark={isDark}
            audioRef={audioRef}
            tracks={tracks}
            setCurrent={setCurrent}
            key={track.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
