import { useParams } from "react-router-dom"
import { skills } from "../data/skills"

export default function SkillDetail() {
  const { id } = useParams()
  const skill = skills.find(s => s.id === Number(id))

  if (!skill) return <h2>スキルが見つかりません</h2>

  return (
    <div>
      <h1>{skill.name}</h1>
      <img 
        src={skill.img} 
        alt={skill.name} 
        style={{ width: "200px", height: "auto" }} 
      />
      <p>good effect: {skill.goodeffect}</p>
      <p>bad effect: {skill.badeffect}</p>
      <p>{skill.description}</p>
    </div>
  )
}
