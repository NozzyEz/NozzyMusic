import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

function Nav({isPlaylistOpen, setIsPlaylistOpen, isDark, setDark}) {
  async function darkModeHandler() {
    !isDark ? await setDark(true) : await setDark(false);
  }

  return (
    <nav className={`nav-bar ${isDark ? 'dark-mode' : ''}`}>
      <h2>NozzyMusic</h2>
      <button className="darkmode-btn" onClick={darkModeHandler}>
        Dark Mode Toggle
      </button>
      <button onClick={() => setIsPlaylistOpen(!isPlaylistOpen)} className="playlist-btn">
        <FontAwesomeIcon icon={faMusic} />
        <span> Playlist </span>
      </button>
    </nav>
  );
}

export default Nav;
