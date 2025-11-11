import React from 'react';

type BannerProps = {
  title: string;
  scripture: string;
};

export function Banner({ title, scripture }: BannerProps): React.JSX.Element {
  return (
    <section className="banner">
      <div className="container banner-inner">
        <div className="banner-text">
          <h2>{title}</h2>
          <p className="scripture">{scripture}</p>
        </div>
      </div>
    </section>
  );
}


