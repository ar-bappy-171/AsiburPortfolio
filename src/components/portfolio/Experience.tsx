"use client";

import { experience } from "@/lib/portfolio-data";
import type { TimelineItem } from "@/lib/portfolio-data";

function TimelineGroup({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline panel reveal">
      {items.map((item, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-dot" aria-hidden="true" />
          <div className="tl-card">
            <div className="tl-title">{item.title}</div>
            <div className="small">{item.meta}</div>
            <ul className="clean muted">
              {item.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <h2 className="section-title reveal center" id="experience-heading">
          Experience
        </h2>
        <p className="section-sub reveal center">Slowly growing for the world</p>

        {experience.groups.map((group, i) => (
          <TimelineGroup key={i} items={group} />
        ))}

        <div className="grid3">
          <article className="card tilt reveal">
            <div className="badge">{experience.competencies.badge}</div>
            <ul className="clean muted">
              {experience.competencies.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
