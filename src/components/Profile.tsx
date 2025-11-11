import React from 'react';

export function Profile(): React.JSX.Element {
  return (
    <section className="section profile">
      <div className="container profile-inner">
        <div className="profile-photo-wrap">
          <img
            src="/profile.jpg"
            alt="Ministry profile"
            className="profile-photo"
            onError={(e) => {
              (e.target as HTMLImageElement).style.visibility = 'hidden';
            }}
          />
        </div>
        <div className="profile-text">
          <h3 className="section-heading">About the Ministry</h3>
          <p className="muted">
            Preaching and teaching the Word of God with sincerity as from God,
            speaking in the sight of God in Christ (2 Corinthians 2:17).
          </p>
        </div>
      </div>
    </section>
  );
}


