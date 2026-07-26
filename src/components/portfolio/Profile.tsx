import { profile } from "@/lib/portfolio-data";

export function Profile() {
  return (
    <section id="profile" aria-labelledby="profile-heading">
      <div className="container">
        <h2 className="section-title reveal center" id="profile-heading">
          Profile
        </h2>
        <div className="panel glass reveal">
          <p className="muted">{profile.profileBio}</p>
        </div>
      </div>
    </section>
  );
}
