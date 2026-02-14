import SearchApp from "./SearchApp";
import SkillList from "./SkillList";
import{Skill} from "./types";

const skills: Skill[] = [
  {id: 1, name: "React", level: "Expert"},
  {id: 2, name: "TypeScript", level: "Intermediate"},
  {id: 3, name: "CSS", level: "Beginner"},
];

function App() {
  return (
    <div style={{padding: "20px"}}>
      <SearchApp />

      <h2>Skills</h2>
      <SkillList skills={skills} />
    </div>
  );
}
export default App;