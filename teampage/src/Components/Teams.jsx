import React, { useState } from "react";
import teams_data from "./TeamsJson";

const Teams = () => {
  const [institutes] = useState([
    ...new Set(teams_data.map((ele) => ele.university)),
  ]);

  const [mentors, setMentors] = useState(teams_data);

  const [subjects] = useState([
    "all",
    ...new Set(teams_data.flatMap((ele) => ele.subject)),
  ]);

  const handleMentors = (institute) => {
    const filteredMentors = teams_data.filter(
      (mentor) => mentor.university === institute
    );
    setMentors(filteredMentors);
  };

  const handleSubjectMentors = (selected_subject) => {
    console.log(selected_subject)
    if (selected_subject === "ALL") {
      setMentors(teams_data);
    } else {
        const filteredMentors = teams_data.filter(mentor =>
            mentor.subject.includes(selected_subject.toLowerCase()))
        setMentors(filteredMentors)
    }
  };

  return (
    <div className="teams_page">
      <h1 className="team_title">Team Page</h1>
      <p>
        Learn from scientists, research scholors from the top institutes in the
        world
      </p>

      <div className="universities">
        {institutes.map((university, index) => {
          return (
            <div
              key={index}
              className="institute"
              onClick={() => handleMentors(university)}
            >
              {university}
            </div>
          );
        })}
      </div>

      <div className="mentors">
        <h3>Meet Your Mentors</h3>
        <div className="subject_categ">
          <select className="subjects" onChange={(e) => handleSubjectMentors(e.target.value)}>

          {subjects.map((ele, index) => (
              <option key={index}>
                {ele.toUpperCase()}
              </option>
            ))}
          </select>
          <p className="sub_desc">
            Find your mentor based on the subject your interested in.
          </p>
        </div>

        <div className="mentors_grid">
          {mentors.map((ele, index) => {
            const { name, image, university } = ele;
            return (
              <article key={index} className="mentor" >
                <img src={image} alt={name} />
                <div className="mentor_info">
                  <h4>{name}</h4>
                  <p>{university.toUpperCase()}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* mentor and advisors */}
        <div className="advisors">

        </div>
      </div>
    </div>
  );
};

export default Teams;
