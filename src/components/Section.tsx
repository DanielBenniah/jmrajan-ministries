import React from 'react';

type SectionProps = {
  id?: string;
  heading: string;
  content: React.ReactNode;
};

export function Section({ id, heading, content }: SectionProps): React.JSX.Element {
  return (
    <section id={id} className="section">
      <div className="container">
        <h3 className="section-heading">{heading}</h3>
        <div className="section-content">{content}</div>
      </div>
    </section>
  );
}


