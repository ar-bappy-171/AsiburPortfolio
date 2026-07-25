import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="container">
        <h2 className="section-title reveal center" id="education-heading">
          Education
        </h2>
        <p className="section-sub reveal center">Academic foundation</p>
        <div className="timeline panel reveal">
          {education.map((item, i) => (
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
      </div>
    </section>
  );
}
