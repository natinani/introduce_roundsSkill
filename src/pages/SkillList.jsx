// import { skills } from "../data/skills"

// export default function SkillList() {
//   return (
//     <div>
//       <h1>スキル一覧</h1>
//       <ul>
//         {skills.map(skill => (
//           <li key={skill.id}>{skill.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
import { Link } from "react-router-dom"
import { skills } from "../data/skills"

export default function SkillList() {
  return (
    <div className="container mt-3">
      <h1 className="mb-4">スキル一覧</h1>

      <div className="row">
        {skills.map(skill => (
          <div className="col-md-4 mb-3" key={skill.id}>
            
            {/* カード全体をリンクにする */}
            <Link 
              to={`/skills/${skill.id}`} 
              className="text-decoration-none text-dark"
            >
              <div className="card h-100">
                <img 
                  src={skill.img} 
                  className="card-img-top"
                  alt={skill.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </Link>

          </div>
        ))}
      </div>
    </div>
  )
}

