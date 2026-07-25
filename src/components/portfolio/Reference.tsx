import { references } from "@/lib/portfolio-data";

function extractEmail(text: string): string | null {
  const m = text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);
  return m ? m[0] : null;
}

export function Reference() {
  return (
    <section id="reference" aria-labelledby="reference-heading">
      <div className="container">
        <h2 className="section-title reveal center" id="reference-heading">
          Reference
        </h2>
        <div className="timeline panel reveal">
          {references.map((item, i) => {
            const email = extractEmail(item.bullets[0]);
            const label = item.bullets[0].replace(/^Email:\s*/i, "");
            return (
              <div className="tl-item" key={i}>
                <div className="tl-dot" aria-hidden="true" />
                <div className="tl-card">
                  <div className="tl-title">{item.title}</div>
                  <div className="small">{item.meta}</div>
                  <ul className="clean muted">
                    <li>
                      Email:{" "}
                      {email ? (
                        <a href={`mailto:${email}`}>{email}</a>
                      ) : (
                        <span>{label}</span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
