// import { Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import SkillList from './pages/SkillList.jsx'
// import SkillDetail from './pages/SkillDetail.jsx'

// export default function App() {
//   return (
//     <div className="container mt-3">
//       <nav className="mb-3">
//         <Link to="/">Home</Link> | <Link to="/skills">Skills</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/skills" element={<SkillList />} />
//         <Route path="/skills/:id" element={<SkillDetail />} />
//       </Routes>
//     </div>
//   )
// }
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SkillList from './pages/SkillList.jsx'
import SkillDetail from './pages/SkillDetail.jsx'

export default function App() {
  return (
    <div className="container mt-3">
      <nav className="mb-3 d-flex gap-4">
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <i className="bi bi-house-door"></i>
          Home
        </Link>

        <Link to="/skills" className="d-flex align-items-center gap-2 text-decoration-none">
          <i className="bi bi-lightning"></i>
          Skills
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillList />} />
        <Route path="/skills/:id" element={<SkillDetail />} />
      </Routes>
    </div>
  )
}
