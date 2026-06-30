import { SKILLS_DATA } from "../lib/utils"


const SkillsTab = () => {
  return (
    <div className="space-y-1">
      {SKILLS_DATA.map((section, idx) => (
        <div key={idx} className="border-b border-gray-200 p-4 sm:px-6 ">
          <div key={idx}>
            <h3 className="font-bold text-lg mb-3">{section.category}</h3>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-800 bg-white hover:bg-gray-100/80 transition-colors cursor-pointer"
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