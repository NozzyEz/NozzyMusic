import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

import '../scss/components/_nav.scss';
import '../scss/components/_dark-mode.scss';

function Nav({isPlaylistOpen, setIsPlaylistOpen, isDark, setDark}) {
  async function darkModeHandler() {
    !isDark ? await setDark(true) : await setDark(false);
  }

  return (
    <nav className={`nav-bar ${isDark ? 'dark-mode' : ''}`}>
      <div className="nav-container">
        <h2>NozzyMusic</h2>
        <button onClick={() => setIsPlaylistOpen(!isPlaylistOpen)} className="playlist-btn">
          <FontAwesomeIcon icon={faMusic} />
          <span> Playlist </span>
        </button>
      </div>
      <button onClick={darkModeHandler}>Dark Mode Toggle</button>
    </nav>
  );
}

export default Nav;
