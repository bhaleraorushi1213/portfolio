import { SKILLS_DATA } from "../lib/utils"


const SkillsTab = () => {
  return (
    <div className="space-y-8 pt-2">
      {SKILLS_DATA.map((section, idx) => (
        <div key={idx}>
          <div key={idx}>
            <h3 className="font-bold text-lg mb-3">{section.category}</h3>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-800 bg-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsTab