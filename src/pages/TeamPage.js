import teamMembers from "../Data/teamData";

function TeamPage() {
  return (
    <div className="team-page">
      <section className="team-hero">
        <h1>Meet Our Team</h1>
      </section>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TeamPage;
