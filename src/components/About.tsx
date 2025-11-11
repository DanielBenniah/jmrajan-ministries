import React from 'react';

export function About(): React.JSX.Element {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About the Ministry</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/profile.jpg" alt="J.M. Rajan" className="profile-image" />
          </div>
          <div className="about-text">
            <h3>J.M. Rajan</h3>
            <p>
              A servant of God dedicated to preaching the Word with sincerity and truth. 
              Through J.M. Rajan Ministries, we bring the message of Christ to people 
              in all places, sharing the gospel with clarity and conviction.
            </p>
            <div className="ministry-info">
              <div className="info-card">
                <h4>Vision</h4>
                <p>
                  We are into preaching the Word of God with sincerity as from God 
                  and we speak in the sight of God in Christ as per 2 Corinthians 2:17.
                </p>
              </div>
              <div className="info-card">
                <h4>Mission</h4>
                <ul>
                  <li>To go and preach rightly dividing the Word of Truth (2 Timothy 2:15)</li>
                  <li>To teach the Word of God in all places, big or small and to all people, few or many</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

