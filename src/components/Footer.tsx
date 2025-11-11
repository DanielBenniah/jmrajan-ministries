import React from 'react';

function YouTubeIcon(): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.8 3 12 3 12 3s-6.8 0-8.7.4A4 4 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a4 4 0 0 0 2.8 2.8C5.2 21 12 21 12 21s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z"
      />
    </svg>
  );
}

function InstagramIcon(): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </svg>
  );
}

export function Footer(): React.JSX.Element {
  return (
    <footer className="site-footer" id="connect">
      <div className="container footer-inner">
        <div>
          <h4>Connect</h4>
          <p className="muted">
            Follow and share to spread the Word.
          </p>
        </div>
        <div className="social">
          <a
            className="social-link youtube"
            href="https://www.youtube.com/channel/UCvxsrVjcIc00zZK-K4cJHEQ"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="YouTube channel"
            title="YouTube"
          >
            <YouTubeIcon />
            <span>YouTube</span>
          </a>
          <a
            className="social-link instagram"
            href="https://www.instagram.com/jmrajan_/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram profile"
            title="Instagram"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="container copyright">
        <small>© {new Date().getFullYear()} J. M. Rajan Ministries</small>
      </div>
    </footer>
  );
}


